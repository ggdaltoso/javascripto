---
type: lesson
title: 'lance'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# lance

Além de capturar erros, você pode **criar e lançar** os seus próprios com `lance` e `novo Erro(...)`:

```jscripto
funcao dividir(a, b) {
  se (b === 0) {
    lance novo Erro("Não é possível dividir por zero!")
  }
  retorne a / b
}

tente {
  imprima(dividir(10, 2))
  imprima(dividir(5, 0))
} capture (e) {
  imprima("Erro: " + e.mensagem)
}
```

`novo Erro("mensagem")` cria um objeto de erro com a descrição que você escolher. Ao usar `lance`, o código para imediatamente e vai para o `capture`.

## Validando entradas

`lance` é ideal para garantir que funções recebam valores válidos:

```jscripto
funcao calcularIdade(anoNascimento) {
  se (anoNascimento > 2024) {
    lance novo Erro("Ano de nascimento inválido")
  }
  retorne 2024 - anoNascimento
}
```

:::tip
`lance` equivale a `throw` e `novo Erro(...)` equivale a `new Error(...)` em JavaScript.
:::

## Sua vez!

Crie uma função `sacar(saldo, valor)` que lança um erro se o `valor` for maior que o `saldo`. Teste com `tente`/`capture`.
