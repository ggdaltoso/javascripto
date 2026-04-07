---
type: lesson
title: 'Template strings'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Template strings

Template strings são uma forma de criar textos com valores embutidos, usando crases `` ` `` em vez de aspas:

```jscripto
deixe nome = "Ana"
deixe saudacao = `Olá, ${nome}!`
imprima(saudacao)  // Olá, Ana!
```

A sintaxe `${...}` insere qualquer expressão dentro do texto.

## Comparando com concatenação

Antes, para montar um texto com variáveis, usávamos `+`:

```jscripto
deixe produto = "Notebook"
deixe preco = 2500

imprima("Produto: " + produto + ", Preço: R$ " + preco)
```

Com template strings, fica mais legível:

```jscripto
imprima(`Produto: ${produto}, Preço: R$ ${preco}`)
```

## Expressões dentro de `${}`

Qualquer expressão válida pode estar dentro de `${}`:

```jscripto
deixe a = 10
deixe b = 3

imprima(`${a} + ${b} = ${a + b}`)
imprima(`${a} × ${b} = ${a * b}`)
```

```jscripto
deixe pontos = 75
imprima(`Situação: ${pontos >= 60 ? "aprovado" : "reprovado"}`)
```

## Múltiplas linhas

Com aspas normais, para quebrar uma linha você precisaria chamar `imprima` várias vezes ou usar `\n` dentro do texto. Com template strings, basta pressionar Enter:

```jscripto
deixe relatorio = `Nome: Ana
Idade: 25
Cidade: Recife`

imprima(relatorio)
```

## Sua vez!

Declare as variáveis `nome` com seu nome, `idade` com sua idade e `cidade` com sua cidade. Use uma template string para criar e imprimir uma frase completa, como: `Ana tem 25 anos e mora em Recife.`
