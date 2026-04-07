---
type: lesson
title: 'Métodos de lista'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Métodos de lista

Além de `.adicione()` e `.remova()`, as listas têm métodos que **transformam** e **consultam** os dados sem precisar de laços.

## `.mapa()`: transformar cada item

`.mapa()` recebe uma função e aplica ela em cada elemento, retornando uma lista nova:

```jscripto
funcao dobrar(x) {
  retorne x * 2
}

deixe numeros = [1, 2, 3, 4, 5]
deixe dobrados = numeros.mapa(dobrar)
imprima(dobrados)  // [2, 4, 6, 8, 10]
```

A lista original não é modificada.

## `.filtre()`: manter só o que passa na condição

`.filtre()` recebe uma função que retorna `verdadeiro` ou `falso`:

```jscripto
funcao eMaiorQueZero(x) {
  retorne x > 0
}

deixe valores = [-2, 5, -1, 8, 0, 3]
deixe positivos = valores.filtre(eMaiorQueZero)
imprima(positivos)  // [5, 8, 3]
```

## `.paraCada()`: executar algo para cada item

`.paraCada()` percorre a lista sem retornar nada, útil para imprimir ou executar ações:

```jscripto
deixe nomes = ["Ana", "Pedro", "Maria"]
nomes.paraCada(imprima)
```

## `.encontre()`: achar o primeiro que passa na condição

```jscripto
funcao eMaiorQue10(x) {
  retorne x > 10
}

deixe numeros = [3, 15, 7, 22, 1]
deixe encontrado = numeros.encontre(eMaiorQue10)
imprima(encontrado)  // 15
```

## `.inclui()`: verificar se um valor existe

```jscripto
deixe frutas = ["maca", "banana", "uva"]
imprima(frutas.inclui("banana"))  // true
imprima(frutas.inclui("manga"))   // false
```

:::tip
No JavaScript, esses métodos se chamam:
- `.mapa()` → `.map()`
- `.filtre()` → `.filter()`
- `.paraCada()` → `.forEach()`
- `.encontre()` → `.find()`
- `.inclui()` → `.includes()`
:::

## Sua vez!

Crie uma lista `notas` com os valores `[4, 7, 9, 5, 8, 3, 10]`. Use `.filtre()` com uma função `aprovado` para manter apenas as notas maiores ou iguais a `6`. Imprima a lista filtrada.
