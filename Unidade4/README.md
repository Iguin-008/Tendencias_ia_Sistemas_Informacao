# Anota Aí

Os prazos da faculdade ficam espalhados no WhatsApp, no portal e nas anotações. O **Anota Aí** junta tudo em **uma agenda simples**: cada item tem **título, dia e descrição**.

Há duas formas de adicionar um item:

1. **Formulário:** preencha título, dia e descrição (não usa IA).
2. **Agente de IA:** escreva uma frase, como "prova de Redes dia 3 de dezembro", e o agente preenche os campos e salva.

Integrantes: Igor Almeida dos Santos e Thomas Kristyann Santos Dias
Disciplina: Tendências em Ciência da Computação (Unidade 4)

## Como rodar

Requisito: Node.js 18 ou superior (não há nada para instalar).

```bash
cp .env.example .env      # no Windows: copy .env.example .env
# edite o .env e coloque sua ANTHROPIC_API_KEY
node server.js
```

Abra http://localhost:3000. Sem a chave, o formulário e a agenda funcionam, e só o agente fica desativado.

A chave fica apenas no servidor e o `.env` está no `.gitignore`

## Arquivos

```
server.js           servidor: agente de 4 camadas e regras de validação
public/index.html   página: formulário, conversa com o agente e agenda
docs/               documentação do projeto
```

## Documentação

Na pasta `docs/`, seguindo o fluxo de trabalho do SERPROBOT:

- `Documento_de_Visao.md`: problema, visão geral, restrições, arquitetura, usuários e referências (etapa *Entender a Necessidade*).
- `Acervo.md`: fontes de apoio e conjunto de frases de exemplo (etapa *Coletar Acervo*).
- `Estrutura_do_Projeto.md`: organização do repositório, correspondência com as pastas sugeridas e situação das etapas (etapa *Montar Estrutura*).
- `Persona_e_Identidade_Visual.md`: persona, tom de voz, linha artística, cores e tipografia (etapa *Id. Visual e Persona*).
- `Modelagem_do_Chatbot.md`: estratégia, intenções, entidades, fluxos, diálogos de amostra e casos de teste (etapa *Modelar o Chatbot*).
- `UX_Writing.md`: revisão das mensagens do agente com os princípios de UX Writing (etapa *UX Writing*).
