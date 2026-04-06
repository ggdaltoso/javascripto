---
type: lesson
title: 'Aguardando em sequência'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Aguardando em sequência

Você pode usar `aguarde` várias vezes dentro de uma função assíncrona. Cada `aguarde` espera o resultado antes de continuar para a próxima linha:

```jscripto
assincrono funcao fazerCafe() {
  retorne "café pronto"
}

assincrono funcao aqueceLeite() {
  retorne "leite quente"
}

assincrono funcao prepararCapuccino() {
  deixe cafe = aguarde fazerCafe()
  deixe leite = aguarde aqueceLeite()
  imprima(cafe + " + " + leite + " = capuccino!")
}

prepararCapuccino()
```

## A ordem importa

Cada linha com `aguarde` executa **depois** que a anterior terminar. Isso garante que você tem os dados antes de usá-los:

```jscripto
assincrono funcao montar() {
  deixe parte1 = aguarde buscarParte1()
  deixe parte2 = aguarde buscarParte2()
  imprima("Montado: " + parte1 + " + " + parte2)
}
```

## Sua vez!

Complete a função `prepararPedido()` que aguarda `buscarCliente()` e `buscarItem()` em sequência, depois imprime `"Pedido de [cliente]: [item]"`.
