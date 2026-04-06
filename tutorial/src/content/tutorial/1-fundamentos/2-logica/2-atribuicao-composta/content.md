---
type: lesson
title: 'Atribuição composta'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Atribuição composta

É muito comum precisar atualizar o valor de uma variável com base nela mesma:

```jscripto
deixe pontos = 10
pontos = pontos + 5
```

Os operadores de atribuição composta fazem a mesma coisa de forma mais curta:

```jscripto
deixe pontos = 10
pontos += 5
imprima(pontos)  // 15
```

## Os quatro operadores

| Forma longa | Forma curta |
|---|---|
| `x = x + n` | `x += n` |
| `x = x - n` | `x -= n` |
| `x = x * n` | `x *= n` |
| `x = x / n` | `x /= n` |

## Sua vez!

Declare `saldo` com valor `1000`. Faça dois depósitos usando `+=` (300 e 150) e um saque usando `-=` (200). Imprima o saldo final.
