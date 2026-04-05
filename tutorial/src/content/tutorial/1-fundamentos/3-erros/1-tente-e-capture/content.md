---
type: lesson
title: 'tente e capture'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# tente e capture

Quando um código pode falhar, você pode **protegê-lo** com `tente` e tratar o erro com `capture`:

```jscripto
tente {
  imprima(10 / 0)
  lance novo Erro("algo deu errado")
  imprima("isso nunca executa")
} capture (erro) {
  imprima("Erro capturado: " + erro.mensagem)
}
```

- O bloco `tente` executa normalmente até encontrar um erro
- Quando um erro ocorre, o código **pula** para `capture`
- `erro` é o objeto do erro onde `erro.mensagem` traz a descrição

## Acessando informações do erro

O objeto de erro tem a propriedade `mensagem` com o texto do erro:

```jscripto
tente {
  deixe resultado = nulo.tamanho
} capture (erro) {
  imprima("Tipo: " + erro.nome)
  imprima("Descrição: " + erro.mensagem)
}
```

:::tip
`tente` equivale a `try` e `capture` equivale a `catch` em JavaScript.
:::

## Sua vez!

O código ao lado tenta acessar uma propriedade de `nulo`, o que causa um erro. Use `tente`/`capture` para capturar o erro e imprimir a mensagem.
