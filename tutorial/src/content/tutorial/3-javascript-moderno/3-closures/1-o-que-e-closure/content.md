---
type: lesson
title: 'O que é um closure'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# O que é um closure

Antes de falar de closures, vale entender **escopo**: onde uma variável pode ser usada.

Uma variável declarada fora de qualquer função é **global**: qualquer função pode acessá-la:

```jscripto
deixe saudacao = "Olá!"

funcao exibir() {
  imprima(saudacao)
}

exibir()
```

Uma variável declarada **dentro** de uma função só existe ali. Mas funções internas também conseguem acessá-la, e isso é um **closure**:

```jscripto
funcao configurar() {
  deixe mensagem = "Tudo certo"

  funcao exibir() {
    imprima(mensagem)
  }

  exibir()
}

configurar()
```

`exibir` não recebe `mensagem` como parâmetro, mas consegue usá-la porque foi criada no mesmo escopo onde `mensagem` existe.

:::tip
Closure = função que lembra as variáveis do escopo onde foi criada.
:::

## Sua vez!

Declare uma variável `titulo` com o valor `"JavaScripto"`. Crie uma função `exibirTitulo` com uma função interna `mostrar` que imprime `"Bem-vindo ao " + titulo`. Chame `mostrar` dentro de `exibirTitulo` e depois chame `exibirTitulo()`.
