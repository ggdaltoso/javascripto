---
type: lesson
title: Condições
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ["node run.js programa.jscripto", "JavaScripto"]
---

# Condições

Programas precisam tomar decisões! Em JavaScripto, usamos `se` e `senao` para isso:

```jscripto
se (idade >= 18) {
  imprima("Maior de idade")
} senao {
  imprima("Menor de idade")
}
```

## Como funciona

- **`se`** verifica uma condição entre parênteses (equivalente a `if`)
- Se a condição for `verdadeiro`, executa o bloco `{ ... }`
- **`senao`** é opcional e executa quando a condição for `falso` (equivalente a `else`)

## Operadores de comparação

| Operador | Significado |
|----------|-------------|
| `==` | igual a |
| `!=` | diferente de |
| `>` | maior que |
| `<` | menor que |
| `>=` | maior ou igual a |
| `<=` | menor ou igual a |

```jscripto
deixe nota = 7

se (nota >= 7) {
  imprima("Aprovado!")
} senao {
  imprima("Reprovado!")
}
```

## Sua vez!

Crie uma variável `temperatura` com um valor numérico. Se a temperatura for maior ou igual a 30, imprima **"Está quente!"**. Senão, imprima **"Está fresco!"**.

:::tip
`se` equivale a `if` e `senao` equivale a `else` em JavaScript. A lógica é a mesma!
:::
