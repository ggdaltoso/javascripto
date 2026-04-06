---
type: lesson
title: 'Funções assíncronas'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Funções assíncronas

Algumas tarefas levam tempo: buscar dados de um servidor, ler um arquivo, esperar uma resposta. Para isso existe o conceito de **função assíncrona**.

Uma função assíncrona é declarada com `assincrono funcao`:

```jscripto
assincrono funcao buscarNome() {
  retorne "Maria"
}
```

Para **esperar** o resultado de uma função assíncrona, use `aguarde`:

```jscripto
assincrono funcao saudar() {
  deixe nome = aguarde buscarNome()
  imprima("Olá, " + nome + "!")
}

saudar()
```

## Como funciona

- `assincrono funcao` declara uma função que pode ser aguardada
- `aguarde` pausa a execução **até o resultado ficar pronto**
- Você só pode usar `aguarde` dentro de uma função `assincrono`

:::tip
`assincrono` = `async`, `aguarde` = `await`
:::

## Sua vez!

A função `buscarProduto()` retorna um nome de produto. Crie uma função assíncrona `mostrarProduto()` que aguarda o resultado e o imprime. No final, chame `mostrarProduto()`.
