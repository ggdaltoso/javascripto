---
type: lesson
title: 'Classes e listas'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Classes e listas

Classes ficam mais úteis quando você as usa junto com listas. É assim que a maioria das aplicações reais organiza os dados.

## Criando vários objetos

```jscripto
classe Produto {
  construtor(nome, preco) {
    isso.nome = nome
    isso.preco = preco
  }

  descricao() {
    retorne isso.nome + ": R$" + isso.preco
  }
}

deixe produtos = [
  novo Produto("Caderno", 15),
  novo Produto("Caneta", 3),
  novo Produto("Mochila", 80)
]
```

## Percorrendo com métodos

```jscripto
para (deixe i = 0; i < produtos.tamanho; i = i + 1) {
  imprima(produtos[i].descricao())
}
```

## Combinando lógica

Você pode usar condicionais dentro do laço:

```jscripto
classe Aluno {
  construtor(nome, nota) {
    isso.nome = nome
    isso.nota = nota
  }

  aprovado() {
    retorne isso.nota >= 7
  }
}

deixe turma = [
  novo Aluno("Ana", 9),
  novo Aluno("Lucas", 5),
  novo Aluno("Sofia", 7)
]

para (deixe i = 0; i < turma.tamanho; i = i + 1) {
  se (turma[i].aprovado()) {
    imprima(turma[i].nome + ": aprovado")
  } senao {
    imprima(turma[i].nome + ": reprovado")
  }
}
```

## Sua vez!

Crie uma classe `Tarefa` com `titulo` e `feita` (começando como `falso`). Adicione um método `concluir()` que muda `feita` para `verdadeiro` e um método `status()` que retorna o título seguido de "- feita" ou "- pendente".

Crie uma lista com 3 tarefas, conclua uma delas, e imprima o status de todas.

:::tip
Este padrão de classe + lista + laço, aparece em todo lugar: lista de usuários, carrinho de compras, feed de posts, playlist de músicas...
:::
