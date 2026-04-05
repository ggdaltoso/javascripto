---
type: lesson
title: 'finalmente'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# finalmente

O bloco `finalmente` executa **sempre**, com erro ou sem erro. É ideal para limpeza e encerramento:

```jscripto
funcao buscarDados(id) {
  se (id <= 0) {
    lance novo Erro("ID inválido")
  }
  retorne "Dados do id " + id
}

tente {
  imprima(buscarDados(42))
} capture (e) {
  imprima("Falhou: " + e.mensagem)
} finalmente {
  imprima("Operação encerrada.")
}
```

Independente de `buscarDados` ter sucesso ou lançar erro, `"Operação encerrada."` sempre é impresso.

## Com e sem erro

```jscripto
tente {
  lance novo Erro("ops")
} capture (e) {
  imprima("capturado: " + e.mensagem)
} finalmente {
  imprima("sempre executa")
}
```

:::tip
`finalmente` equivale a `finally` em JavaScript.
:::

## Sua vez!

Complete o código: a função `processar(valor)` lança um erro se `valor` for negativo. Use `tente`/`capture`/`finalmente` para processar o valor, capturar o erro e sempre imprimir `"Processamento finalizado."` ao final.
