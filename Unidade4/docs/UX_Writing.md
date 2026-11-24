# UX Writing — Anota Aí

**Disciplina:** Tendências em Ciência da Computação — Unidade 4 (Projeto Final)
**Integrantes:** Igor Almeida dos Santos e Thomas Kristyann Santos Dias
**Etapa do fluxo de trabalho (SERPROBOT):** UX Writing

## 1. O que esta etapa pede

Revisar e reescrever os diálogos do chatbot com foco na experiência do usuário, de acordo com a persona definida em `Persona_e_Identidade_Visual.md`. O entregável são os **diálogos revisados**, sob a ótica da persona e dos princípios de UX Writing.

## 2. Decisão de projeto: todas as mensagens são fixas

A documentação lembra que, com IA generativa, não é possível controlar totalmente o conteúdo das respostas. No Anota Aí, a solução foi **retirar da IA qualquer texto que o usuário lê**:

- A IA só **interpreta** a frase e devolve dados (título, dia, descrição).
- Todas as mensagens exibidas ao usuário (ajuda, erros, bloqueio e **confirmação de sucesso**) são escritas pelo grupo e montadas pelo servidor.

Motivos:

- **Qualidade (Grice):** a confirmação usa os dados que foram de fato gravados. Antes, a IA escrevia a confirmação e poderia citar uma data diferente da salva.
- **Previsibilidade:** o tom da persona fica igual em toda conversa.
- **Simplicidade:** é mais fácil de explicar, testar e manter.

## 3. Princípios aplicados

### Máximas de Grice

| Máxima | Como foi aplicada |
|---|---|
| Quantidade | Mensagens curtas, com uma ideia por frase e sem repetição |
| Qualidade | A confirmação mostra exatamente o título e a data gravados; nada é prometido além disso |
| Relevância | Cada resposta trata só do prazo em questão e do próximo passo |
| Modo | Frases diretas, sem frases intercaladas e sem jargão ("dado sensível" virou "CPF, cartão ou senha") |

### Boas práticas da etapa

| Prática | Aplicação |
|---|---|
| Gerenciar expectativas | A saudação se apresenta e dá um exemplo do que escrever |
| Falhar graciosamente | Os erros dizem o que aconteceu, tranquilizam ("Sua agenda não mudou") e indicam o que fazer |
| Próximo passo claro | Quando falta algo, a mensagem termina com uma pergunta direta ("Qual é o dia?") |
| Orientado a objetivo | O usuário escreve uma frase e o item é salvo, sem menus nem etapas extras |
| Turnos curtos | Uma resposta por mensagem, sem sequências que obriguem a rolar a tela |
| Confirmações | O agente repete o que salvou ("Anotei: Prova de Redes, 03/12/2026.") |

## 4. Diálogos revisados

| Situação | Antes | Depois |
|---|---|---|
| Boas-vindas | "Olá! Sou o agente da agenda. Escreva um prazo ou compromisso (ex.: “entregar o relatório sexta”) e eu salvo para você." | Mantida: já se apresenta, dá exemplo e diz o próximo passo |
| Ajuda | "Eu transformo frases em itens da agenda. Escreva o que vence e quando, por exemplo: “prova de Redes dia 3 de dezembro” ou “entregar o relatório sexta”. Posso criar até 3 itens por mensagem. Para concluir ou remover um item, use os botões da lista." | "Eu transformo frases em itens da agenda. Escreva o que vence e quando, por exemplo: “prova de Redes dia 3 de dezembro”. Posso salvar até 3 itens por mensagem. Para concluir ou remover, use os botões da lista." |
| Sucesso | Texto escrito pela IA, que variava | "Anotei: Prova de Redes, 03/12/2026." (vários itens: "Anotei 2 itens: …; ….") |
| Não encontrou prazo | "Não entendi isso como um prazo ou compromisso. Exemplo: “prova de Redes dia 3 de dezembro”." | "Não encontrei um prazo nessa mensagem. Tente assim: “prova de Redes dia 3 de dezembro”." |
| Faltou a data | "Não salvei nada: "X" não foi salvo: faltou uma data válida. Pode me dizer a data?" | "Para salvar “X”, preciso da data. Qual é o dia?" |
| Data já passou | "Não salvei nada: "X" não foi salvo: a data já passou. Pode me dizer a data?" | "A data de “X” já passou. Qual é a data certa?" |
| Mais de 3 itens | "limite de 3 itens por mensagem aplicado" (texto técnico) | "Salvei apenas os 3 primeiros itens: esse é o limite por mensagem." |
| Dado sensível | "Detectei um possível dado sensível (CPF, cartão ou senha). Por privacidade, não envio isso à IA nem guardo. Reescreva sem esses dados." | "Sua mensagem parece ter CPF, cartão ou senha. Por segurança, não enviei nem guardei nada. Reescreva sem esses dados." |
| Falha da IA | "Não consegui falar com a IA agora. Nada foi alterado. Tente novamente." | "Não consegui processar agora. Sua agenda não mudou. Tente de novo em instantes." |
| Agente sem chave | "O servidor está sem chave de IA. Configure ANTHROPIC_API_KEY no arquivo .env." | "O agente está desativado porque falta a chave de IA. A agenda e o formulário continuam funcionando." |
| Mensagem vazia | "Digite uma mensagem." | Mantida |
| Desfazer | "Ação desfeita." | "Pronto, desfiz a última ação." |

## 5. Tratamento de entradas problemáticas

| Situação | Como o Anota Aí responde |
|---|---|
| Nenhuma resposta (mensagem vazia) | Pede que o usuário digite uma mensagem |
| Entrada inesperada ("Qual a capital da França?") | Explica que não encontrou um prazo e mostra um exemplo |
| Entrada ambígua (sem data) | Salva nada e pergunta o dia; o histórico recente ajuda a juntar a resposta com a frase anterior |
| Mais informações que o pedido (muitos prazos ou dado sensível) | Salva até 3 itens e avisa o limite; bloqueia dados sensíveis |
| Falha técnica | Diz que a agenda não mudou e pede para tentar de novo |

## 6. Itens da etapa que não se aplicam

| Item | Motivo |
|---|---|
| Negrito, links e imagens nas respostas | O chat exibe texto simples, e as mensagens são curtas |
| Emoticons | A persona foi definida sem emojis |
| Saudação personalizada | Não há login nem nome de usuário |
| Validar os diálogos com a equipe do cliente | Não há cliente |
| Testes de usabilidade com usuários reais | Limitado: as mensagens foram revisadas apenas pelo grupo (ver seção 7) |

## 7. Limites

- Os diálogos não foram testados com outros estudantes. Um teste de usabilidade simples (pedir a 3 colegas que registrem um prazo) seria o próximo passo.
- A interpretação de frases continua feita pela IA e pode errar; o servidor valida os dados antes de salvar.
- Datas ambíguas (por exemplo, "dia 5" sem mês) dependem da interpretação da IA.
