---
type: lesson
title: 'Objetos e listas'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Objetos e listas

O verdadeiro poder aparece quando voce **combina objetos e listas**. Isso é como a maioria dos dados reais é organizada.

## Lista de objetos

Imagine uma lista de contatos, onde cada contato é um objeto:

```jscripto
deixe contatos = [
  { nome: "Ana", telefone: "1111" },
  { nome: "Pedro", telefone: "2222" },
  { nome: "Maria", telefone: "3333" }
]

imprima(contatos[0].nome)  // "Ana"
imprima(contatos[1].telefone)  // "2222"
```

## Percorrendo lista de objetos

Combine `para` com acesso a propriedades:

```jscripto
deixe alunos = [
  { nome: "Julia", nota: 9 },
  { nome: "Lucas", nota: 5 },
  { nome: "Sofia", nota: 7 }
]

para (deixe i = 0; i < alunos.tamanho; i = i + 1) {
  se (alunos[i].nota >= 7) {
    imprima(alunos[i].nome + ": aprovado")
  } senao {
    imprima(alunos[i].nome + ": reprovado")
  }
}
```

## Objeto com lista

Um objeto tambem pode ter uma lista como propriedade:

```jscripto
deixe turma = {
  professor: "Carlos",
  alunos: ["Ana", "Pedro", "Maria"]
}

imprima(turma.professor)
imprima(turma.alunos[0])
imprima(turma.alunos.tamanho)
```

## Sua vez!

Crie uma lista `produtos` com 3 objetos. Cada objeto deve ter `nome` e `preco`. Depois, use um laco `para` para imprimir o nome e preço de cada produto.

:::tip
Listas de objetos sao a base de quase toda aplicacao real: listas de usuários, produtos, mensagens, posts... Saber trabalhar com elas e essencial!
:::
