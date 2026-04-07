---
type: lesson
title: 'Funções flecha'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Funções flecha

Funções flecha são uma forma mais curta de escrever funções. Em vez de `funcao`, você usa `=>`:

```jscripto
// Forma clássica
funcao dobrar(x) {
  retorne x * 2
}

// Função flecha equivalente
deixe dobrar = x => x * 2

imprima(dobrar(5))  // 10
```

Com vários parâmetros, use parênteses:

```jscripto
deixe soma = (a, b) => a + b
imprima(soma(3, 4))  // 7
```

Sem parâmetros, os parênteses são obrigatórios:

```jscripto
deixe saudar = () => "Olá!"
imprima(saudar())
```

## Com bloco

Quando a função precisa de mais de uma linha, use chaves e `retorne`:

```jscripto
deixe descrever = nome => {
  deixe mensagem = "Nome: " + nome
  retorne mensagem
}

imprima(descrever("Ana"))
```

## Com métodos de lista

Funções flecha são especialmente úteis como argumento de `.mapa()` e `.filtre()`, evitando a necessidade de nomear uma função separada:

```jscripto
deixe numeros = [1, 2, 3, 4, 5]

deixe dobrados = numeros.mapa(x => x * 2)
imprima(dobrados)  // [2, 4, 6, 8, 10]

deixe pares = numeros.filtre(x => x % 2 === 0)
imprima(pares)  // [2, 4]
```

## Sua vez!

Crie uma lista `numeros` com os valores `[1, 2, 3, 4, 5]`. Use `.mapa()` com uma função flecha para criar a lista `quadrados`, onde cada número é elevado ao quadrado (`n * n`). Imprima `quadrados`.
