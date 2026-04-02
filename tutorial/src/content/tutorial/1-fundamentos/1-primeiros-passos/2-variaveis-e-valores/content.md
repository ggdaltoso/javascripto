---
type: lesson
title: Variáveis e valores
template: default
focus: /programa.jscripto
---

# Variáveis e valores

Variáveis são como caixas onde guardamos informações. Em JavaScripto, usamos `deixe` e `const` para criar variáveis:

```
deixe nome = "Maria"
const idade = 25
```

## `deixe` vs `const`

- **`deixe`** — cria uma variável que pode mudar de valor depois (equivalente a `let`)
- **`const`** — cria uma variável que **não muda** (equivalente a `const`)

```
deixe pontos = 0
pontos = 10  // pode mudar!

const pi = 3.14
// pi = 3  ← isso daria erro!
```

## Sua vez!

Crie uma variável `nome` com seu nome e uma constante `ano` com o ano atual. Depois, imprima os dois:

```
imprima(nome)
imprima(ano)
```
