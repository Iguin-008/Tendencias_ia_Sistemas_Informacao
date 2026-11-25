// Anota Aí – servidor sem dependências (Node 18+).
// Guarda a chave da IA, valida os dados e executa as ações do agente.
const http = require("http"), fs = require("fs"), path = require("path");

// Lê o arquivo .env (sem biblioteca externa)
try {
  fs.readFileSync(path.join(__dirname, ".env"), "utf8").split("\n").forEach(l => {
    const m = l.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  });
} catch {}

const PORT = process.env.PORT || 3000;
const MODEL = process.env.MODEL || "claude-sonnet-5-5";
const KEY = process.env.ANTHROPIC_API_KEY;
const DB = path.join(__dirname, "data", "agenda.json");

let itens = [];      // a agenda: { id, titulo, dia, descricao, feito }
let snap = null;     // cópia da agenda antes da última ação (para desfazer)
try { itens = JSON.parse(fs.readFileSync(DB, "utf8")); } catch {}
const save = () => { fs.mkdirSync(path.dirname(DB), { recursive: true }); fs.writeFileSync(DB, JSON.stringify(itens, null, 2)); };
const fmt = d => d.split("-").reverse().join("/");
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };

// ---------- Regras de validação (camada DECISÓRIA; valem para formulário e agente) ----------
function validDia(s) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s || "")) return false;
  const d = new Date(s + "T12:00:00");
  return !isNaN(d) && d.toISOString().slice(0, 10) === s;
}
// Devolve o item limpo, ou null (e registra o motivo em "log")
function limpar(x, log) {
  const titulo = String(x.titulo || "").trim().slice(0, 100);
  if (!titulo) { log.push("Faltou o título de um item."); return null; }
  if (!validDia(x.dia)) { log.push(`Para salvar “${titulo}”, preciso da data. Qual é o dia?`); return null; }
  if (x.dia < today()) { log.push(`A data de “${titulo}” já passou. Qual é a data certa?`); return null; }
  return { titulo, dia: x.dia, descricao: String(x.descricao || "").trim().slice(0, 200) };
}
const adicionar = lista => { let n = itens.reduce((m, i) => Math.max(m, i.id), 0); lista.forEach(i => itens.push({ id: ++n, feito: false, ...i })); };
// Minimização de dados: bloqueia CPF, cartão e senha antes de enviar à IA
const sensivel = t => /\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/.test(t) || /senha\s*[:=]/i.test(t) || /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/.test(t);

// ---------- Camada COGNITIVA: a IA interpreta a frase ----------
async function perguntarIA(mensagem, historico) {
  const h = historico.slice(-6).map(x => `${x.r}: ${String(x.c).slice(0, 300)}`).join("\n") || "(início)"; // memória curta
  const prompt = `Você é o agente de uma agenda da faculdade. Hoje é ${today()} (formato AAAA-MM-DD).
Extraia da mensagem os compromissos ou prazos e responda SOMENTE com JSON válido, sem markdown:
{"intent":"criar|ajuda|desconhecido","itens":[{"titulo":"...","dia":"AAAA-MM-DD ou null","descricao":"... ou vazio"}]}
Regras: converta datas relativas (sexta, amanhã) para AAAA-MM-DD; se a mensagem não tiver data, use null em "dia"; no máximo 3 itens; se for um cumprimento ou um pedido de ajuda (ex.: "oi", "o que você faz?"), use intent "ajuda"; se a mensagem não for sobre prazos ou compromissos, use intent "desconhecido".

Últimas trocas:
${h}

Mensagem do usuário: ${mensagem}`;
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": KEY, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({ model: MODEL, max_tokens: 800, messages: [{ role: "user", content: prompt }] })
  });
  if (!r.ok) throw new Error("Erro da API de IA: " + r.status);
  const data = await r.json();
  const texto = (data.content || []).map(c => c.text || "").join("").replace(/```json|```/g, "").trim();
  return JSON.parse(texto);
}

const AJUDA = "Eu transformo frases em itens da agenda. Escreva o que vence e quando, por exemplo: “prova de Redes dia 3 de dezembro”. Posso salvar até 3 itens por mensagem. Para concluir ou remover, use os botões da lista.";

// ---------- Agente: Perceptiva -> Cognitiva -> Decisória -> Executiva ----------
async function agente({ message, history = [] }) {
  const msg = String(message || "").trim().slice(0, 500);
  const trace = [["Perceptiva", `recebeu: "${msg}"`]];
  if (!msg) return { reply: "Digite uma mensagem.", trace };
  if (sensivel(msg)) {
    return { reply: "Sua mensagem parece ter CPF, cartão ou senha. Por segurança, não enviei nem guardei nada. Reescreva sem esses dados.",
      trace: [...trace, ["Cognitiva", "não executada"], ["Decisória", "regra de privacidade: dado sensível bloqueado"], ["Executiva", "nada foi enviado ou gravado"]] };
  }
  if (!KEY) return { reply: "O agente está desativado porque falta a chave de IA. A agenda e o formulário continuam funcionando.", trace };

  // Privacidade: descarta do histórico qualquer trecho com dado sensível (o histórico vem do navegador)
  const hist = (Array.isArray(history) ? history : []).filter(x => x && !sensivel(String(x.c || "")));
  const p = await perguntarIA(msg, hist);
  trace.push(["Cognitiva", `a IA interpretou a intenção como "${p.intent}"`]);

  if (p.intent === "ajuda") {
    return { reply: AJUDA, trace: [...trace, ["Decisória", "intenção de ajuda: resposta fixa, sem alterar a agenda"], ["Executiva", "nada foi gravado"]] };
  }

  const log = []; let novos = [];
  if (p.intent === "criar") {
    let lista = Array.isArray(p.itens) ? p.itens : [];
    if (lista.length > 3) { log.push("Salvei apenas os 3 primeiros itens: esse é o limite por mensagem."); lista = lista.slice(0, 3); }
    novos = lista.map(x => limpar(x, log)).filter(Boolean);
  }
  trace.push(["Decisória", "conferiu título, data válida e data não passada" + (log.length ? " → " + log.join("; ") : " → tudo certo")]);

  let reply;
  if (novos.length) {
    snap = JSON.stringify(itens); adicionar(novos); save();
    trace.push(["Executiva", `${novos.length} item(ns) salvo(s) na agenda. Use “Desfazer” se discordar.`]);
    const lista = novos.map(n => `${n.titulo}, ${fmt(n.dia)}`);
    reply = novos.length === 1 ? `Anotei: ${lista[0]}.` : `Anotei ${novos.length} itens: ${lista.join("; ")}.`;
    if (log.length) reply += " " + log.join(" ");
  } else {
    trace.push(["Executiva", "nada foi gravado"]);
    reply = log.length ? log.join(" ") : "Não encontrei um prazo nessa mensagem. Tente assim: “prova de Redes dia 3 de dezembro”.";
  }
  return { reply, trace };
}

// ---------- Servidor HTTP ----------
const json = (res, code, obj) => { res.writeHead(code, { "content-type": "application/json; charset=utf-8" }); res.end(JSON.stringify(obj)); };
const corpo = req => new Promise((ok, no) => { let b = ""; req.on("data", c => { b += c; if (b.length > 10000) { no(new Error("grande")); req.destroy(); } }); req.on("end", () => { try { ok(b ? JSON.parse(b) : {}); } catch (e) { no(e); } }); });
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript" };

http.createServer(async (req, res) => {
  try {
    const p = new URL(req.url, "http://x").pathname;
    if (p === "/api/agenda" && req.method === "GET") return json(res, 200, itens);
    if (p === "/api/agenda" && req.method === "POST") {      // formulário manual (sem IA)
      const log = [], i = limpar(await corpo(req), log);
      if (!i) return json(res, 400, { error: log.join("; ") });
      snap = JSON.stringify(itens); adicionar([i]); save(); return json(res, 201, itens);
    }
    const m = p.match(/^\/api\/agenda\/(\d+)$/);
    if (m && req.method === "PATCH") { itens.forEach(i => { if (i.id == m[1]) i.feito = !i.feito; }); save(); return json(res, 200, itens); }
    if (m && req.method === "DELETE") { snap = JSON.stringify(itens); itens = itens.filter(i => i.id != m[1]); save(); return json(res, 200, itens); }
    if (p === "/api/undo" && req.method === "POST") { if (snap) { itens = JSON.parse(snap); snap = null; save(); } return json(res, 200, itens); }
    if (p === "/api/agent" && req.method === "POST") {
      try { return json(res, 200, { ...(await agente(await corpo(req))), itens }); }
      catch (e) { console.error(e.message); return json(res, 502, { reply: "Não consegui processar agora. Sua agenda não mudou. Tente de novo em instantes.", trace: [] }); }
    }
    // arquivos estáticos (somente a pasta public)
    const f = path.join(__dirname, "public", p === "/" ? "index.html" : p);
    if (!f.startsWith(path.join(__dirname, "public")) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end("Não encontrado"); }
    res.writeHead(200, { "content-type": MIME[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(res);
  } catch (e) { json(res, 400, { error: "Requisição inválida" }); }
}).listen(PORT, () => console.log(`Anota Aí em http://localhost:${PORT} ${KEY ? "" : "(sem ANTHROPIC_API_KEY: o agente fica desativado)"}`));
