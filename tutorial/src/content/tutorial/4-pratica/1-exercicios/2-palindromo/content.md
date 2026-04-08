---
type: lesson
title: 'Palíndromo'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Palíndromo

Uma palavra é um palíndromo se for igual quando lida de trás para frente. Por exemplo: `"arara"`, `"civic"`, `"level"`.

Escreva uma função `palindromo(palavra)` que:

1. Constrói a palavra invertida usando um laço `para` (percorra os índices de trás para frente, acessando cada letra com `palavra[i]`)
2. Retorna `verdadeiro` se a palavra original for igual à invertida, `falso` caso contrário

**Saída esperada:**

```
true
false
true
```

> Dica: `palavra.tamanho` retorna o número de letras da palavra.
