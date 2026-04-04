---
type: lesson
title: 'Métodos'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Métodos

O `construtor` cria o objeto, mas classes podem ter **métodos**: funções que pertencem ao objeto e definem seu comportamento.

```jscripto
classe Animal {
  construtor(nome, som) {
    isso.nome = nome
    isso.som = som
  }

  falar() {
    imprima(isso.nome + " faz " + isso.som + "!")
  }
}

deixe gato = novo Animal("Gato", "miau")
gato.falar()  // "Gato faz miau!"
```

## Métodos com parâmetros

Métodos podem receber parâmetros, como fuções normais:

```jscripto
classe Calculadora {
  construtor(valor) {
    isso.valor = valor
  }

  somar(n) {
    isso.valor = isso.valor + n
  }

  mostrar() {
    imprima("Valor: " + isso.valor)
  }
}

deixe calc = novo Calculadora(10)
calc.somar(5)
calc.mostrar()  // "Valor: 15"
```

## Métodos que retornam valores

Métodos também podem usar `retorne`:

```jscripto
classe Retangulo {
  construtor(largura, altura) {
    isso.largura = largura
    isso.altura = altura
  }

  area() {
    retorne isso.largura * isso.altura
  }
}

deixe r = novo Retangulo(5, 3)
imprima("Área: " + r.area())  // "Area: 15"
```

## Sua vez!

Crie uma classe `ContaBancaria` com:

1. `construtor` que recebe `titular` e começa com `saldo` igual a 0
2. Métodos `depositar(valor)` que aumenta o saldo
3. Métodos `mostrarSaldo()` que imprime o titular e o saldo

Crie uma conta, faça dois depósitos e mostre o saldo.

:::tip
Métodoss são como funções, mas sem a palavra `funcao`. Dentro de uma classe, basta escrever `nome() { ... }`
:::
