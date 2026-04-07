---
type: lesson
title: Tipos de dados
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ["node run.js programa.jscripto", "JavaScripto"]
---

# Tipos de dados

Em JavaScripto, todo valor tem um **tipo**. Os tipos básicos são:

## Texto (String)

Textos ficam entre aspas simples ou duplas:

```jscripto
deixe saudacao = "Olá!"
deixe cidade = 'São Paulo'
```

Para juntar dois textos, use o operador `+`:

```jscripto
deixe nome = "Ana"
deixe mensagem = "Olá, " + nome + "!"
imprima(mensagem)  // Olá, Ana!
```

Isso se chama **concatenação**. Funciona também com números:

```jscripto
deixe idade = 25
imprima("Idade: " + idade)  // Idade: 25
```

## Número (Number)

Números não precisam de aspas:

```jscripto
deixe idade = 25
deixe altura = 1.75
```

## Booleano (Boolean)

Valores lógicos: **verdadeiro** ou **falso**:

```jscripto
deixe maiorDeIdade = verdadeiro
deixe chovendo = falso
```

:::tip
`verdadeiro` equivale a `true` e `falso` equivale a `false` em JavaScript.
:::

## Nulo (Null)

Representa "nenhum valor":

```jscripto
deixe resposta = nulo
```

## Sua vez!

Declare as variáveis `nome` com o seu nome e `idade` com a sua idade. Use concatenação para imprimir uma frase como: `Meu nome é Ana e tenho 25 anos.`
