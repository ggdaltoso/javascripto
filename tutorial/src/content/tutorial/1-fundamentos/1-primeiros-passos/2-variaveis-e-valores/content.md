---
type: lesson
title: Variáveis e valores
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ["node run.js programa.jscripto 2", "JavaScripto"]
---

# Variáveis e valores

Variáveis são como caixas onde guardamos informações. Em JavaScripto, usamos `deixe` e `fixe` para criar variáveis:

```jscripto
deixe nome = "Maria"
fixe idade = 25
```

## `deixe` vs `fixe`

- **`deixe`** — cria uma variável que pode mudar de valor depois (equivalente a `let`)
- **`fixe`** — cria uma variável que **não muda** (equivalente a `const`)

```jscripto
deixe pontos = 0
pontos = 10  // pode mudar!

fixe pi = 3.14
// pi = 3  ← isso daria erro!
```

## Sua vez!

Crie uma variável `nome` com seu nome e uma constante `ano` com o ano atual. Depois, imprima os dois:

```jscripto
imprima(nome)
imprima(ano)
```
