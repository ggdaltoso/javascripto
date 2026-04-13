---
type: lesson
title: 'Transformando listas'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Transformando listas

Além dos métodos que já vimos, existem três que trabalham juntos para transformar listas e textos: `.divida()`, `.inverta()` e `.junta()`.

## `.divida()`: quebrar um texto em lista

`.divida()` recebe um separador e retorna uma lista com as partes:

```jscripto
deixe frase = "ana banana"
deixe letras = frase.divida("")
imprima(letras)  // ["a", "n", "a", " ", "b", "a", "n", "a", "n", "a"]

deixe palavras = frase.divida(" ")
imprima(palavras)  // ["ana", "banana"]
```

## `.inverta()`: inverter a ordem da lista

`.inverta()` muda a lista no lugar, colocando os elementos em ordem contrária:

```jscripto
deixe numeros = [1, 2, 3, 4, 5]
numeros.inverta()
imprima(numeros)  // [5, 4, 3, 2, 1]
```

## `.junta()`: unir uma lista em string

`.junta()` recebe um separador e une todos os elementos em uma string:

```jscripto
deixe partes = ["Java", "Scripto"]
imprima(partes.junta(""))   // "JavaScripto"
imprima(partes.junta(" "))  // "Java Scripto"
imprima(partes.junta("-"))  // "Java-Scripto"
```

## Combinando os três

Esses três métodos funcionam muito bem em sequência. Por exemplo, para verificar se uma palavra é um palíndromo (lida igual de trás para frente):

```jscripto
deixe palavra = "arara"
deixe invertida = palavra.divida("").inverta().junta("")
imprima(palavra === invertida)  // verdadeiro
```

:::tip
No JavaScript, esses métodos se chamam:

- `.divida()` → `.split()`
- `.inverta()` → `.reverse()`
- `.junta()` → `.join()`
  :::

## Sua vez!

Escreva uma função `palindromo` que recebe uma palavra e retorna `verdadeiro` se ela for um palíndromo, ou `falso` caso contrário. Teste com `"arara"` e `"banana"`.
