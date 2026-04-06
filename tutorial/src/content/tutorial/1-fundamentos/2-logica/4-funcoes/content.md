---
type: lesson
title: Funções
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ["node run.js programa.jscripto", "JavaScripto"]
---

# Funções

Funções são blocos de código reutilizáveis. Em JavaScripto, usamos `funcao` para criar uma:

```jscripto
funcao saudacao(nome) {
  imprima("Olá, " + nome + "!")
}

saudacao("Maria")
saudacao("João")
```

## Retornando valores

Use `retorne` para devolver um valor (equivalente a `return`):

```jscripto
funcao dobro(numero) {
  retorne numero * 2
}

deixe resultado = dobro(5)
imprima(resultado)
```

## Múltiplos parâmetros

Funções podem receber vários parâmetros:

```jscripto
funcao soma(a, b) {
  retorne a + b
}

imprima(soma(3, 7))
```

## Sua vez!

Crie uma função `maiorDeDois` que receba dois números e retorne o maior deles. Teste chamando a função e imprimindo o resultado.

:::tip
`funcao` equivale a `function` e `retorne` equivale a `return` em JavaScript.
:::
