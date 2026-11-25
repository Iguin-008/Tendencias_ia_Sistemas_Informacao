# Estrutura do Projeto — Anota Aí

**Disciplina:** Tendências em Ciência da Computação — Unidade 4 (Projeto Final)
**Integrantes:** Igor Almeida dos Santos e Thomas Kristyann Santos Dias
**Etapa do fluxo de trabalho (SERPROBOT):** Montar Estrutura

## 1. O que esta etapa pede

A etapa "Montar Estrutura" consiste em criar uma **área compartilhada de documentos** do projeto, organizada em um repositório de referência da equipe (drive, git etc.), onde as informações são incluídas e compartilhadas. A documentação do SERPROBOT sugere uma lista de pastas. Aqui, o repositório de referência é o **GitHub**, na pasta da Unidade 4 do repositório da disciplina.

## 2. Estrutura adotada

Como o projeto é pequeno e feito por duas pessoas, não foram criadas pastas vazias para cada item sugerido. Foram usados arquivos nomeados de forma clara dentro de `docs/`, e as pastas sugeridas que não se aplicam estão justificadas na seção 3.

```
unidade-4/
├── README.md                          apresentação do projeto e como rodar
├── server.js                          servidor: agente de 4 camadas e regras de validação
├── package.json
├── .env.example                       modelo do arquivo de configuração (sem a chave real)
├── .gitignore
├── public/
│   └── index.html                     página: formulário, conversa com o agente e agenda
└── docs/
    ├── Estrutura_do_Projeto.md        este documento (Montar Estrutura)
    ├── Documento_de_Visao.md          Entender a Necessidade
    ├── Analise_Etica.md               viés algorítmico e responsabilidade social
    ├── Acervo.md                      Coletar Acervo
    ├── Persona_e_Identidade_Visual.md Id. Visual e Persona
    ├── Modelagem_do_Chatbot.md        Modelar o Chatbot
    └── UX_Writing.md                  UX Writing
```

## 3. Correspondência com as pastas sugeridas

| Pasta sugerida pelo SERPROBOT | No Anota Aí | Onde está |
|---|---|---|
| Acervo Oficial (insumos do cliente) | **Não se aplica.** Não há cliente nem base de conhecimento recebida: o agente só extrai dados da frase | — |
| Acervo Complementar (insumos pesquisados pela equipe) | Material de apoio: guia da disciplina, documentação do SERPROBOT e LGPD; inclui o conjunto de frases de exemplo | `docs/Acervo.md` |
| Acompanhamento (cronogramas e controle) | Calendário da disciplina e situação das etapas | Seção 4 deste documento |
| Reuniões | **Sem registro formal.** O trabalho foi combinado entre os dois integrantes | — |
| Id. Visual e Persona | Persona, tom de voz, linha artística, cores e tipografia | `docs/Persona_e_Identidade_Visual.md` |
| Arquitetura da Informação | Arquitetura do sistema e linhas temáticas (tema, assunto, intenção) | `docs/Documento_de_Visao.md` (seção 4) e `docs/Modelagem_do_Chatbot.md` (seção 2) |
| Modelagem | Intenções, entidades, variáveis, fluxos e diálogos de amostra | `docs/Modelagem_do_Chatbot.md` |
| Testes | Tabela de casos de teste e testes de viés/adversariais | `docs/Modelagem_do_Chatbot.md` (seção 9) e `docs/Analise_Etica.md` (seções 5 e 6) |
| Divulgação | **Não se aplica.** O `README.md` faz o papel de apresentação | `README.md` |
| Entregas | A própria pasta `unidade-4` no GitHub, cujo link é registrado na tabela da professora | Repositório da disciplina |
| Versões do modelo | Histórico de commits do GitHub; o modelo de IA é configurável pela variável `MODEL` do arquivo `.env`; o prompt fica em `server.js` | Repositório e `server.js` |

## 4. Acompanhamento

### Calendário da disciplina (Unidade 4)

| Data | Tema | Observação |
|---|---|---|
| 05/11 | Agentes e Ética: criação de agentes de IA | Aula |
| 12/11 | Agentes e Ética: chatbot e ferramentas, com a especificação | Aula |
| 19/11 | Agentes e Ética: viés algorítmico e responsabilidade social | Aula |
| 26/11 | Projeto Final: apresentação do projeto e repositório GitHub na pasta da disciplina | Data final na tabela da professora; entrega prevista pelo grupo: 25/11 |

### Situação das etapas do fluxo de trabalho (em 24/11/2026)

| # | Etapa | Situação | Documento |
|---|---|---|---|
| 1 | Entender a Necessidade | Feita | `Documento_de_Visao.md` |
| 2 | Montar Estrutura | Feita | Este documento |
| 3 | Id. Visual e Persona | Feita | `Persona_e_Identidade_Visual.md` |
| 4 | Coletar acervo | Feita | `Acervo.md` |
| 5 | Modelar o Chatbot | Feita | `Modelagem_do_Chatbot.md` |
| 6 | UX Writing | Feita | `UX_Writing.md` |
| 7 | Implementar o Chatbot | Feita (código e README) | `server.js`, `public/index.html`, `README.md` |
| 8 | Testar o Chatbot | Feita: casos executados em 24/11 (interpretação feita por assistente de IA em conversa, sem a API paga; ver método) | `Modelagem_do_Chatbot.md`, seção 9 |
| 9 | Homologar o Chatbot | Não se aplica (sem cliente) | — |
| 10 | Implantar o Chatbot | Não se aplica (roda localmente) | — |
| 11 | Realizar Curadoria | Não se aplica (sem conversas reais) | — |

## 5. Partes do modelo que não se aplicam a este projeto

Algumas partes do modelo do SERPROBOT não se aplicam a este projeto:

| Parte do modelo | Motivo |
|---|---|
| Canvas do Chatbot e estimativa de esforço | Servem para propor o projeto a um cliente |
| Pastas de acervo oficial, reuniões e divulgação | Dependem de cliente e de equipe maior |
| Validação dos diálogos com a equipe do cliente | Não há cliente |
| Homologação e implantação em canais reais | O sistema roda localmente |
| Curadoria depois do lançamento | Não há conversas reais de usuários para analisar |

## 6. Regras de organização do repositório

- Documentos em Markdown (`.md`), dentro de `docs/`, com nome descritivo.
- O arquivo `.env` (com a chave da API) **nunca** é enviado ao GitHub; apenas o modelo `.env.example`.
- A pasta `data/`, criada ao rodar o sistema, também não é enviada (guarda as anotações de teste).
- Cada alteração relevante é registrada em um commit com mensagem descritiva, o que também documenta a participação dos dois integrantes.
