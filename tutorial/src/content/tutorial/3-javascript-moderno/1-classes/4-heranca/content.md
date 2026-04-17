---
type: lesson
title: 'Herança'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Herança

Com herança, uma classe aproveita o que outra já tem. Use `estende`:

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

deixe rex = novo Cachorro("Rex")
rex.falar()
```

`Cachorro` não precisou de construtor próprio porque herdou o de `Animal`. Só o `falar()` foi trocado.

## super

Quando a subclasse tem seu próprio construtor, você precisa chamar `super()` antes de usar `isso`. Para chamar um método do pai, use `super.metodo()`:

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

deixe mimi = novo Gato("Mimi", "laranja")
imprima(mimi.descricao())
```

`super(nome)` passa o nome pro construtor de `Animal`. `super.descricao()` chama o método do pai antes de acrescentar a cor.

## Sua vez!

Crie `Veiculo` com `construtor(marca)` e um método `descricao()` que retorna `"Veículo: " + isso.marca`.

Depois crie `Carro estende Veiculo` com `construtor(marca, modelo)`. Não esqueça o `super(marca)`. O método `descricao()` deve retornar `super.descricao() + ", modelo: " + isso.modelo`.

Crie `novo Carro("Toyota", "Corolla")` e imprima a descrição.

:::tip
`estende` equivale a `extends` em JavaScript.
:::
