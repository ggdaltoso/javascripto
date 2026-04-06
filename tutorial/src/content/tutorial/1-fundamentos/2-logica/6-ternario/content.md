---
type: lesson
title: 'Operador ternário'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Operador ternário

O operador ternário é uma forma curta de escrever um `se/senao` quando você quer escolher entre dois valores:

```jscripto
deixe idade = 20
deixe situacao = idade >= 18 ? "adulto" : "menor"
imprima(situacao)
```

A estrutura é sempre: `condição ? valor_se_verdadeiro : valor_se_falso`

Equivale a:

```jscripto
deixe situacao = ""
se (idade >= 18) {
  situacao = "adulto"
} senao {
  situacao = "menor"
}
```

## Quando usar

O ternário é útil quando você precisa de um valor baseado em uma condição simples. Se a lógica for mais complexa, prefira o `se/senao`.

```jscripto
deixe pontos = 75
deixe resultado = pontos >= 60 ? "aprovado" : "reprovado"
imprima(resultado)
```

## Sua vez!

Declare uma variável `temperatura` com o valor `32`. Use o operador ternário para criar a variável `clima`: se `temperatura` for maior que `30`, o valor é `"quente"`, senao é `"agradavel"`. Imprima `clima`.
