---
type: lesson
title: 'Percorrendo listas'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Percorrendo listas

Com listas, passar por todos os itens um por um é uma das coisas que você vai fazer o tempo todo.

## Usando `para` com listas

O laço `para` combina perfeitamente com listas. Use `.tamanho` como limite:

```jscripto
deixe nomes = ["Ana", "Pedro", "Maria"]

para (deixe i = 0; i < nomes.tamanho; i = i + 1) {
  imprima(nomes[i])
}
```

Isso imprime cada nome, um por linha.

## Somando valores

Um padrão muito comum é percorrer uma lista de números para calcular algo:

```jscripto
deixe notas = [8, 7, 9, 10]
deixe soma = 0

para (deixe i = 0; i < notas.tamanho; i = i + 1) {
  soma = soma + notas[i]
}

imprima("Total: " + soma)
```

## Buscando um item

Você também pode percorrer para encontrar algo:

```jscripto
deixe frutas = ["maca", "banana", "uva", "manga"]
deixe busca = "uva"

para (deixe i = 0; i < frutas.tamanho; i = i + 1) {
  se (frutas[i] == busca) {
    imprima("Encontrei na posição " + i)
  }
}
```

## Sua vez!

Crie uma lista `numeros` com pelo menos 5 números. Depois, use um laço `para` para calcular e imprimir a **soma** de todos os números.

:::tip
O padrão `para (deixe i = 0; i < lista.tamanho; i = i + 1)` é tão comum que vai virar automático com a prática!
:::
