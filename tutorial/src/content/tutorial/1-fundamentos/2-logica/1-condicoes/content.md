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

## Combinando condições

Use `&&` (e) e `||` (ou) para combinar duas ou mais condições:

```jscripto
deixe idade = 20
deixe temCarteira = verdadeiro

se (idade >= 18 && temCarteira) {
  imprima("Pode dirigir")
} senao {
  imprima("Não pode dirigir")
}
```

```jscripto
deixe chovendo = falso
deixe fimDeSemana = verdadeiro

se (chovendo || fimDeSemana) {
  imprima("Boa hora para assistir um filme")
}
```

## Encadeando condições

Use `senao se` para verificar múltiplas condições em sequência:

```jscripto
deixe nota = 75

se (nota >= 90) {
  imprima("Excelente")
} senao se (nota >= 70) {
  imprima("Aprovado")
} senao se (nota >= 50) {
  imprima("Recuperação")
} senao {
  imprima("Reprovado")
}
```

Apenas o primeiro bloco cuja condição for verdadeira é executado.

## Sua vez!

Crie uma variável `hora` com um valor entre 0 e 23. Use `senao se` para imprimir:

- `"Bom dia!"` se hora for menor que 12
- `"Boa tarde!"` se hora for entre 12 e 17 (inclusive)
- `"Boa noite!"` caso contrário
