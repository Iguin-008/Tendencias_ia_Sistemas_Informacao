# Aula 02 — Engenharia de Prompt

## 1. Identificação

- **Curso:** Sistemas de Informação
- **Turma:** Tendências em Ciências da Computação
- **Grupo:** Individual
- **Data:** 24/08/2026
- **Integrante:** Igor Almeida dos Santos - 39026400

---

## 2. Problema escolhido

O contexto envolve uma pessoa que recebe uma renda mensal regular e necessita gerenciar suas finanças de forma equilibrada, mas não possui um planejamento estruturado.

O problema central é a dificuldade em organizar o dinheiro ao longo do mês, por não saber quanto destinar para necessidades básicas, gastos com lazer e metas de economia.

---

## 3. Objetivo

Utilizar a inteligência artificial para criar uma divisão orçamentária prática baseada na regra **50/30/20**, definindo percentuais claros para gastos essenciais, gastos pessoais e reserva financeira, aplicáveis à rotina mensal.

---

## 4. Prompt inicial

> Como organizar meu dinheiro no mês?

---

## 5. Resultado inicial

Para organizar o seu dinheiro no mês, siga estas dicas:

1. Anote todos os seus ganhos e gastos.
2. Corte despesas desnecessárias.
3. Monte um orçamento e tente poupar pelo menos 10% da sua renda.
4. Evite dívidas no cartão de crédito.
5. Crie uma reserva de emergência e comece a investir.

---

## 6. Análise crítica

A resposta inicial apresentou conceitos financeiros válidos, como controle de gastos e criação de uma reserva financeira. Porém, apresentou informações muito genéricas e não definiu valores ou proporções práticas.

Também faltou aplicar um método específico, como a regra **50/30/20**, apresentar uma simulação numérica e estruturar as informações de forma visual.

Dessa forma, foi necessário criar um prompt mais detalhado, fornecendo contexto, objetivo, restrições e formato de resposta.

---

## 7. Prompt refinado

> Você é um educador financeiro e consultor de finanças pessoais. O contexto é de uma pessoa com renda regular que enfrenta dificuldades para equilibrar seus gastos diários e não sabe qual percentual destinar para cada área da vida.
>
> O objetivo é criar um plano de distribuição orçamentária mensal com base na metodologia 50/30/20.
>
> Sua tarefa é estruturar a divisão em **Necessidades Básicas, Desejos Pessoais e Metas Financeiras**, incluindo um exemplo simulado para uma renda de **R$ 3.000,00**.
>
> Não utilize jargões bancários ou termos complexos. Mantenha uma linguagem simples, direta e acessível para iniciantes.
>
> Apresente a divisão em formato de tabela com as colunas **Categoria, % Recomendada, Itens Incluídos e Exemplo (R$ 3.000)**.
>
> A divisão deve somar 100% da renda, conter exemplos realistas e ser fácil de aplicar no dia a dia.

---

## 8. Resultado refinado

| Categoria | Percentual | Valor | Exemplos |
|---|---:|---:|---|
| Necessidades Básicas | 50% | R$ 1.500,00 | Aluguel, contas essenciais, supermercado e transporte |
| Desejos Pessoais | 30% | R$ 900,00 | Restaurantes, passeios, compras e streaming |
| Metas Financeiras | 20% | R$ 600,00 | Reserva de emergência e investimentos futuros |
| **Total** | **100%** | **R$ 3.000,00** | — |

A recomendação é separar o valor destinado às metas financeiras assim que o salário for recebido, evitando que o dinheiro seja utilizado em outros gastos ao longo do mês.

---

## 9. Técnicas utilizadas

Foram aplicadas as seguintes técnicas de Engenharia de Prompt:

- **Role Prompting:** definição da função da IA como educador financeiro e consultor de finanças pessoais.
- **Fornecimento de contexto:** apresentação do problema e da situação financeira a ser analisada.
- **Definição de restrições:** determinação de uma linguagem simples e acessível, sem termos complexos.
- **Especificação do formato de saída:** solicitação de uma tabela com categorias e valores definidos.
- **Refinamento iterativo:** melhoria do prompt a partir da análise da primeira resposta gerada.

---

## 10. Comparação

O **Prompt A** apresentou baixa clareza, pouco contexto e resultou em uma resposta genérica, sem valores ou proporções específicas.

O **Prompt B**, por outro lado, apresentou comandos mais diretos, contexto específico, regras claras e um formato de saída definido.

Dessa forma, o segundo prompt foi mais adequado ao objetivo, pois reduziu as interpretações da IA e produziu uma resposta mais estruturada e funcional.

---

## 11. Validação

A coerência matemática da resposta foi confirmada por meio da soma das porcentagens:

**50% + 30% + 20% = 100%**

Também foram conferidos os valores referentes à renda simulada:

**R$ 1.500,00 + R$ 900,00 + R$ 600,00 = R$ 3.000,00**

A metodologia 50/30/20 foi utilizada como referência para estruturar a divisão orçamentária, mas suas proporções podem precisar de adaptações conforme a realidade financeira de cada pessoa.

---

## 12. Ética e responsabilidade

O uso de IA para organização financeira pode apresentar riscos quando a ferramenta desconsidera particularidades da realidade econômica de cada pessoa, como custo de vida, renda variável, dívidas ou situações financeiras específicas.

Por isso, a IA deve ser utilizada como uma ferramenta de apoio e organização. A responsabilidade pelas decisões financeiras permanece com o usuário.

---

## 13. Take Away

A qualidade do retorno gerado pela IA depende diretamente da precisão das instruções fornecidas pelo usuário.

A Engenharia de Prompt permite definir contexto, objetivo, restrições e formato de saída, transformando uma solicitação genérica em uma orientação mais específica, organizada e útil para a tomada de decisões.

---

## 14. Link

[Repositório no GitHub](https://github.com/Iguin-008/Tendencias_ia_Sistemas_Informacao/tree/main/unidade1)
