---
type: lesson
title: 'Herança'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Herança

Herança permite criar uma classe baseada em outra, reaproveitando seus métodos e propriedades. Use a palavra `estende` (equivalente a `extends`).

## Estendendo uma classe

```jscripto
classe Animal {
  construtor(nome) {
    isso.nome = nome
  }

  falar() {
    imprima(isso.nome + " faz um barulho.")
  }
}

classe Cachorro estende Animal {
  falar() {
    imprima(isso.nome + " late: Au!")
  }
}

deixe d = novo Cachorro("Rex")
d.falar()
```

`Cachorro` herda tudo de `Animal`, mas substitui o método `falar()`.

## super

Use `super` para acessar o construtor ou métodos da classe pai:

```jscripto
classe Animal {
  construtor(nome) {
    isso.nome = nome
  }

  descricao() {
    retorne "Animal: " + isso.nome
  }
}

classe Gato estende Animal {
  construtor(nome, cor) {
    super(nome)
    isso.cor = cor
  }

  descricao() {
    retorne super.descricao() + ", cor: " + isso.cor
  }
}

deixe g = novo Gato("Mimi", "laranja")
imprima(g.descricao())
```

- `super(nome)` chama o construtor de `Animal`
- `super.descricao()` chama o método `descricao()` de `Animal`

## Sua vez!

Crie uma classe `Veiculo` com `construtor(marca)` que guarda a marca em `isso.marca`, e um método `descricao()` que retorna `"Veículo: " + isso.marca`.

Depois crie uma classe `Carro estende Veiculo` com `construtor(marca, modelo)` que chama `super(marca)` e guarda o modelo em `isso.modelo`. Adicione um método `descricao()` que retorna `super.descricao() + ", modelo: " + isso.modelo`.

Crie um `novo Carro("Toyota", "Corolla")` e imprima sua descrição.

:::tip
`estende` equivale a `extends` e `super` equivale a `super` em JavaScript.
:::
