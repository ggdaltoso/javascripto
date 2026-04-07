---
type: lesson
title: 'Escolha'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ["node run.js programa.jscripto", "JavaScripto"]
---

# Escolha

Quando você precisa comparar um valor com várias opções fixas, `escolha` é mais claro do que vários `se/senao`:

```jscripto
deixe dia = 2

escolha (dia) {
  caso 1: imprima("Segunda-feira") quebre
  caso 2: imprima("Terça-feira") quebre
  caso 3: imprima("Quarta-feira") quebre
  padrao: imprima("Outro dia")
}
```

- `caso` compara o valor com cada opção (equivale a `case`)
- `quebre` impede que o código "caia" no próximo caso
- `padrao` é executado quando nenhum caso combina (equivale a `default`)

## Efeito cascata: casos sem quebre

Omitir `quebre` faz o código continuar executando os casos seguintes. Isso é útil para agrupar opções:

```jscripto
deixe nota = "B"

escolha (nota) {
  caso "A":
  caso "B":
    imprima("Aprovado")
    quebre
  caso "C":
    imprima("Recuperação")
    quebre
  padrao:
    imprima("Reprovado")
}
```

`"A"` e `"B"` caem no mesmo bloco e imprimem `"Aprovado"`.

## Sua vez!

Crie um `escolha` que receba o número de um mês (1 a 12) e imprima o nome do mês correspondente. Use `padrao` para meses inválidos.

:::tip
`escolha` equivale a `switch` em JavaScript.
:::
