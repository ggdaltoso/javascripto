---
type: lesson
title: 'Exportando funções'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Exportando funções

Em projetos reais, o código é dividido em arquivos. A palavra `exporte` marca o que um arquivo oferece para os outros:

```jscripto
exporte funcao soma(a, b) {
  retorne a + b
}

exporte funcao multiplica(a, b) {
  retorne a * b
}

imprima(soma(10, 5))       // 15
imprima(multiplica(4, 3))  // 12
```

Funções exportadas ainda podem ser usadas no próprio arquivo, como qualquer outra função.

## Exportando constantes

Variáveis também podem ser exportadas:

```jscripto
exporte fixe PI = 3.14159
exporte fixe E = 2.71828

imprima(PI)
imprima(E)
```

## Sua vez!

Declare e exporte uma função `quadrado(n)` que retorna `n` ao quadrado. Em seguida, imprima `quadrado(5)` e `quadrado(8)`.
