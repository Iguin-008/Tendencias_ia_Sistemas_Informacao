# Atividade - Refinamento de Prompts

## Identificação

* **Nome:** Igor Almeida
* **Turma:** Sistemas de Informação / Tendências em Ciência da Computação
* **Data:** 17/09/2026
* **Ferramenta de IA utilizada:** Gemini

---

## Problema escolhido

### Contexto
Estudantes do 2º semestre do curso de Ciência da Computação que estão iniciando o aprendizado da disciplina de Estruturas de Dados. Eles já conhecem conceitos básicos de programação (variáveis, condicionais e laços), mas ainda não compreendem a diferença prática nem a implementação em memória de coleções abstratas como Pilhas (LIFO) e Filas (FIFO).

### Problema
Compreender a diferença conceitual e prática entre as estruturas de dados **Pilha** e **Fila**, bem como suas implementações e aplicações reais no desenvolvimento de software.

### Objetivo
Obter uma explicação didática, estruturada e com código funcional em C, capaz de guiar um estudante iniciante do conceito básico até a implementação e escolha de uso de Pilhas e Filas.

---

## Prompt 1

### Prompt
```text
Explique pilhas e filas em C.
```

### Resultado
Pilhas e Filas são estruturas de dados lineares usadas para armazenar e organizar elementos na memória.

**Pilha (Stack):**
Funciona no sistema **LIFO** (*Last In, First Out*), onde o último elemento a entrar é o primeiro a sair.
* Operação de inserção: `push()`
* Operação de remoção: `pop()`

**Fila (Queue):**
Funciona no sistema **FIFO** (*First In, First Out*), onde o primeiro elemento a entrar é o primeiro a sair.
* Operação de inserção: `enqueue()`
* Operação de remoção: `dequeue()`

**Exemplo de código simples de Pilha em C:**

```c
#include <stdio.h>
#define MAX 5

int pilha[MAX];
int topo = -1;

void push(int valor) {
    if (topo < MAX - 1) {
        topo++;
        pilha[topo] = valor;
    }
}

void pop() {
    if (topo >= 0) {
        topo--;
    }
}

int main() {
    push(10);
    push(20);
    pop();
    return 0;
}
```

### Análise
* **O que funcionou:** Apresentou corretamente os acrônimos LIFO e FIFO e o nome das operações básicas.
* **O que faltou:** Faltou contextualização para iniciantes, analogias do cotidiano, tratamento de erros no código (como mensagens de erro para stack overflow/underflow) e comparação visual/estruturada.
* **O que ficou genérico:** O código gerado foi muito resumido, sem comentários explicando o papel de ponteiros ou índices, o que dificulta o aprendizado de quem está no 2º semestre.
* **O que poderia ser melhor:** A estrutura da resposta, a profundidade do código e a indicação de casos de uso reais no software.

---

## Prompt 2

### Alterações realizadas
* **Papel:** Atuar como professor especialista em Estruturas de Dados.
* **Público:** Estudantes iniciantes de Ciência da Computação.
* **Objetivo:** Explicar a diferença entre Pilha e Fila de forma intuitiva.
* **Formato:** Utilizar analogias do cotidiano, lista de conceitos e uma tabela comparativa.
* **Restrições:** Limitar a explicação conceitual e focar na didática antes do código.

### Prompt
```text
Atue como professor de Ciência da Computação especializado em Estruturas de Dados.

Explique a diferença entre Pilhas e Filas para estudantes do primeiro ano de graduação.

Apresente:
1. Uma definição simples de cada uma;
2. Uma analogia com situações do dia a dia para cada estrutura;
3. As principais operações (inserção e remoção);
4. Uma tabela comparativa entre LIFO e FIFO;
5. Dois exemplos reais de aplicação em sistemas de software.

Utilize linguagem didática e acessível.
```

### Resultado
Olá, alunos! Vamos entender hoje duas estruturas fundamentais na computação: as **Pilhas** e as **Filas**.

---

### 1. Definições Simples

* **Pilha (Stack):** É uma estrutura linear onde a inserção e a remoção de itens ocorrem sempre na mesma extremidade, chamada de **topo**.
* **Fila (Queue):** É uma estrutura linear onde a inserção ocorre em uma extremidade (**ré/fim**) e a remoção ocorre na extremidade oposta (**frente/início**).

---

### 2. Analogias do Dia a Dia

* **Pilha:** Pense em uma **pilha de pratos** na cozinha. O último prato lavado é colocado no topo da pilha. Quando alguém precisa de um prato, retira justamente o que está no topo (o último que foi colocado).
* **Fila:** Pense em uma **fila de banco**. A primeira pessoa que chega é a primeira a ser atendida e sair da fila. Quem chega depois entra no final da fila e precisa esperar.

---

### 3. Principais Operações

#### Pilha
* **Push (Empilhar):** Adiciona um novo elemento no topo.
* **Pop (Desempilhar):** Remove o elemento do topo.

#### Fila
* **Enqueue (Enfileirar):** Adiciona um elemento no final da fila.
* **Dequeue (Desenfileirar):** Remove o elemento da frente da fila.

---

### 4. Tabela Comparativa

| Característica | Pilha (Stack) | Fila (Queue) |
| :--- | :--- | :--- |
| **Princípio de funcionamento** | **LIFO** (*Last In, First Out*) | **FIFO** (*First In, First Out*) |
| **Entrada de dados** | Ocorre no topo | Ocorre na ré (fim) |
| **Saída de dados** | Ocorre no topo | Ocorre na frente (início) |
| **Acesso aos elementos** | Apenas o elemento mais recente | Apenas o elemento mais antigo |

---

### 5. Exemplos Reais em Software

1. **Aplicações para Pilhas:**
   * **Recurso "Desfazer" (Ctrl + Z):** Cada ação executada no editor é empilhada. Ao pressionar Ctrl+Z, a última ação realizada é a primeira a ser revertida.

2. **Aplicações para Filas:**
   * **Fila de Impressão de Documentos:** Os documentos enviados para a impressora são processados rigorosamente na ordem em que foram solicitados pelo usuário.

---

## Comparação

| Critério | Prompt 1 | Prompt 2 |
|---|---:|---:|
| Clareza | 2 | 5 |
| Precisão | 3 | 4 |
| Relevância | 2 | 5 |
| Organização | 2 | 5 |
| Adequação ao público | 2 | 5 |
| Atendimento ao objetivo | 2 | 4 |

---

## Prompt 3

### O que ainda precisava melhorar?
O Prompt 2 cobriu perfeitamente a parte conceitual, mas faltou a parte prática de codificação segura em C e a verificação do aprendizado do aluno através de exercícios/diagnóstico.

### Hipótese
Adicionar restrições de código em linguagem C (tratamento de topo/frente, limites de array), critérios de qualidade no código e perguntas de checagem ao final tornará a resposta pronta para uso em laboratório e garantirá fixação do conteúdo.

### Prompt
```text
Atue como professor de Ciência da Computação especializado em Estruturas de Dados.

CONTEXTO:
Estudantes do 2º semestre já conhecem variáveis, structs e ponteiros básicos em C, mas têm dificuldade em visualizar como manipular o topo de uma pilha e a frente/ré de uma fila em memória.

OBJETIVO:
Fazer o estudante compreender intuitivamente Pilhas e Filas e ser capaz de implementar a estrutura básica em C.

TAREFA:
1. Explicação conceitual breve com analogias do cotidiano;
2. Tabela comparativa (LIFO vs FIFO, operações e complexidade);
3. Exemplo prático de código em C para uma PILHA simples com struct e array, contendo comentários explicativos em cada linha do push e do pop;
4. Casos de uso reais no desenvolvimento de software;
5. Um exercício prático para o aluno resolver sozinho (sem mostrar a resposta).

RESTRIÇÕES:
- O código em C deve incluir verificação de pilha cheia (overflow) e vazia (underflow);
- Utilizar nomes claros de variáveis;
- Não utilizar bibliotecas externas além de <stdio.h> e <stdbool.h>.

CRITÉRIO DE QUALIDADE:
Ao final, apresente duas perguntas de múltipla escolha sobre o comportamento das estruturas para testar a retenção do conhecimento.
```

### Resultado
Olá, futuros engenheiros de software! Hoje vamos dominar **Pilhas** e **Filas**, compreendendo a lógica conceitual e a implementação segura na linguagem C.

---

### 1. Conceito Rápido e Analogias

* **Pilha (LIFO - *Last In, First Out*):** O último a entrar é o primeiro a sair.
  * *Analogia:* Uma pilha de pratos ou uma pilha de livros em cima da mesa.
* **Fila (FIFO - *First In, First Out*):** O primeiro a entrar é o primeiro a sair.
  * *Analogia:* A fila de um drive-thru ou a fila do caixa de supermercado.

---

### 2. Tabela Comparativa

| Propriedade | Pilha (Stack) | Fila (Queue) |
| :--- | :--- | :--- |
| **Ordem de Atendimento** | LIFO | FIFO |
| **Ponto de Inserção** | Topo | Ré (Fim) |
| **Ponto de Remoção** | Topo | Frente (Início) |
| **Complexidade das Operações** | $O(1)$ para Push e Pop | $O(1)$ para Enqueue e Dequeue |

---

### 3. Código Prático em C: Pilha com Struct

Abaixo temos a implementação completa de uma pilha fixa com controle rigoroso de *overflow* (pilha cheia) e *underflow* (pilha vazia).

```c
#include <stdio.h>
#include <stdbool.h>

#define CAPACIDADE 5 // Define o tamanho máximo da nossa pilha na memória

// Estrutura que representa a Pilha
typedef struct {
    int itens[CAPACIDADE]; // Array estático que guarda os dados
    int topo;              // Índice que controla qual posição é o topo
} Pilha;

// Função para inicializar a pilha
void inicializarPilha(Pilha *p) {
    p->topo = -1; // -1 indica que a pilha está vazia (nenhuma posição válida do array)
}

// Verifica se a pilha está cheia (Stack Overflow)
bool estaCheia(Pilha *p) {
    return p->topo == CAPACIDADE - 1; // Retorna true se o topo chegou ao último índice
}

// Verifica se a pilha está vazia (Stack Underflow)
bool estaVazia(Pilha *p) {
    return p->topo == -1; // Retorna true se o topo for -1
}

// Inserção de elemento na Pilha
void push(Pilha *p, int valor) {
    if (estaCheia(p)) { 
        printf("[ERRO] Stack Overflow! A pilha está cheia. Não foi possível inserir %d.\n", valor);
        return; // Interrompe a execução para não estourar a memória do array
    }
    
    p->topo++;                  // 1. Incrementa o topo para avançar para a próxima posição livre
    p->itens[p->topo] = valor;  // 2. Armazena o novo elemento na posição atual do topo
    printf("Item %d inserido com sucesso!\n", valor);
}

// Remoção de elemento da Pilha
int pop(Pilha *p) {
    if (estaVazia(p)) {
        printf("[ERRO] Stack Underflow! A pilha está vazia.\n");
        return -1; // Retorna um valor de erro indicando falha
    }

    int valorRemovido = p->itens[p->topo]; // 1. Copia o valor armazenado no topo atual
    p->topo--;                            // 2. Decrementa o topo (o elemento antigo é "esquecido")
    return valorRemovido;                 // 3. Retorna o valor removido ao chamador
}

int main() {
    Pilha minhaPilha;
    inicializarPilha(&minhaPilha);

    push(&minhaPilha, 10);
    push(&minhaPilha, 20);
    push(&minhaPilha, 30);

    printf("Removido: %d\n", pop(&minhaPilha)); // Deve remover o 30
    printf("Removido: %d\n", pop(&minhaPilha)); // Deve remover o 20

    return 0;
}
```

---

### 4. Casos de Uso Reais no Desenvolvimento de Software

1. **Navegador Web (Histórico de Páginas):** Quando você clica no botão "Voltar" do navegador, ele desempilha a URL mais recente para retornar à página anterior.
2. **Buffer de Teclado (Fila de Digitação):** Quando você digita rápido demais no teclado, o sistema operacional enfileira as teclas pressionadas e as processa exatamente na ordem em que foram digitadas.

---

### 5. Desafio para Você Resolver

**Exercício Prático:** Com base na lógica que estudamos para a Pilha, projete uma estrutura de dados `Fila` contendo um array de tamanho máximo 5 e os índices `frente` e `re`. Escreva a função `enqueue(Fila *f, int valor)` garantindo que o programa avise o usuário caso a fila atinja a capacidade máxima.

---

### 6. Teste de Retenção de Conhecimento

**Questão 1:** Se inserirmos a sequência de números `[5, 10, 15, 20]` em uma **Pilha** e em seguida executarmos duas operações de remoção (`pop`), quais elementos foram removidos e qual é o elemento que sobrou no topo?
* A) Removidos: 5 e 10. Topo atual: 15.
* B) Removidos: 20 e 15. Topo atual: 10.
* C) Removidos: 20 e 15. Topo atual: 5.
* D) Removidos: 5 e 20. Topo atual: 10.

**Questão 2:** Qual das seguintes situações descreve corretamente uma condição de *Stack Underflow*?
* A) Tentar inserir um item em uma pilha cujo índice `topo` é igual a `CAPACIDADE - 1`.
* B) Tentar acessar o topo da pilha após executar operações `push` consecutivas.
* C) Tentar remover um elemento (`pop`) de uma pilha cujo `topo` tem o valor `-1`.
* D) Tentar reinicializar uma pilha que contém elementos armazenados.

---

## Comparação final

| Critério | Prompt 1 | Prompt 2 | Prompt 3 |
|---|---:|---:|---:|
| Clareza | 2 | 5 | 5 |
| Precisão | 3 | 4 | 5 |
| Relevância | 2 | 5 | 5 |
| Organização | 2 | 5 | 5 |
| Adequação ao público | 2 | 5 | 5 |
| Atendimento ao objetivo | 2 | 4 | 5 |
| Utilidade | 2 | 4 | 5 |
| **Total** | **15** | **32** | **35** |

---

## Validação

### Como você verificou a qualidade e correção da resposta?

* **Checagem de Código:** O código em C gerado no Prompt 3 foi compilado e testado. Confirmou-se que as verificações de limites (`p->topo == CAPACIDADE - 1` e `p->topo == -1`) tratam corretamente cenários de estouro de pilha (*stack overflow*) e remoção em pilha vazia (*stack underflow*).
* **Conceituação Teórica:** Verificou-se que a ordem LIFO/FIFO e as operações de manipulação em C estão em estrita conformidade com a literatura clássica de ciência da computação (Cormen et al., Tenenbaum).
* **Ausência de Alucinações:** Confirmou-se o uso exclusivo de bibliotecas nativas autorizadas (`<stdio.h>` e `<stdbool.h>`) sem a criação de funções fictícias ou incoerentes.

---

## Reflexão

### 1. Qual foi a principal diferença entre os prompts?
A especificidade do contexto e das restrições. Enquanto o Prompt 1 era genérico e gerava respostas rasas, os Prompts 2 e 3 guiaram a IA definindo o papel do emissor, o perfil do receptor, o formato de saída e critérios estritos de qualidade para o código em C.

### 2. Quais elementos tiveram maior impacto?
A adição de Público/Contexto (iniciantes no 2º semestre) e Restrições/Critérios de Qualidade (código comentado com tratamento de erros de overflow/underflow e perguntas de checagem).

### 3. Um prompt maior é necessariamente melhor?
Não. Apenas adicionar palavras como "seja detalhado e perfeito" não melhora o resultado. O impacto real vem de fornecer informações estruturadas (papel, tarefa, contexto, restrições e formato de saída).

### 4. O que ocorre quando o objetivo não é claro?
A IA assume premissas genéricas e padronizadas. Ela tende a entregar um texto médio que pode ser difícil demais para um iniciante ou raso demais para uma implementação técnica real.

### 5. Quais informações são indispensáveis?
O papel/especialista desejado, o público-alvo, a tarefa principal, as restrições (o que não fazer) e o formato final desejado.

### 6. Como essa habilidade pode ser utilizada profissionalmente?
Na engenharia de software, o refinamento de prompts permite gerar esboços de arquiteturas, encontrar bugs específicos em código, criar casos de teste automatizados e documentar APIs com precisão, economizando tempo de desenvolvimento.

### 7. Quais riscos existem ao confiar automaticamente na IA?
A IA pode gerar códigos com falhas de segurança, estouro de memória, lógica ineficiente ou inventar funções/bibliotecas que não existem (alucinação). Sem validação humana, esses erros vão parar em produção.

---

## Take Away

> Um bom prompt não é simplesmente um prompt longo. Ele precisa explicitar com clareza o papel, o contexto, a tarefa, o formato desejado e as restrições, orientando a IA para o objetivo exato sem gerar ambiguidades.

---

## Cinco recomendações

1. **Defina um Papel e um Público:** Diga à IA como quem ela deve agir e para quem ela está explicando.
2. **Estabeleça Restrições Claras:** Especifique o que a IA não deve fazer (ex: "não use bibliotecas externas", "limite em X palavras").
3. **Solicite Formatação Estruturada:** Peça tabelas, listas de tópicos ou blocos de código comentados para facilitar a leitura.
4. **Trabalhe de Forma Iterativa:** Não aceite a primeira resposta; analise as falhas, adicione contexto e refine o prompt no próximo ciclo.
5. **Sempre Valide o Resultado:** Verifique se os códigos compilam, se as fontes existem e se a lógica está correta antes de utilizar a resposta.
