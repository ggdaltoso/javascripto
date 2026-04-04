---
type: lesson
title: 'Criando classes'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Criando classes

Até agora, você usou objetos simples para organizar dados. Mas e quando você quer criar **vários objetos parecidos**? Por exemplo, vários animais, cada um com nome e som. Classes resolvem isso.

Uma **classe** é como um molde para criar objetos:

```jscripto
classe Animal {
  construtor(nome) {
    isso.nome = nome
  }
}

deixe gato = novo Animal("Mimi")
imprima(gato.nome)  // "Mimi"
```

## Como funciona

- `classe` define o molde (como `funcao`, mas para objetos)
- `construtor` é executado automaticamente quando você cria um objeto com `novo`
- `isso` se refere ao objeto que está sendo criado
- `novo` cria uma nova instancia da classe

## Várias instâncias

O poder das classes e criar vários objetos do mesmo tipo:

```jscripto
classe Pessoa {
  construtor(nome, idade) {
    isso.nome = nome
    isso.idade = idade
  }
}

deixe ana = novo Pessoa("Ana", 25)
deixe pedro = novo Pessoa("Pedro", 30)

imprima(ana.nome)    // "Ana"
imprima(pedro.idade) // 30
```

## Sua vez!

Crie uma classe `Carro` com `marca` e `ano`. Depois, crie dois carros e imprima a marca e o ano de cada um.

:::tip
`classe` = `class`, `construtor` = `constructor`, `novo` = `new`, `isso` = `this`
:::
