---
type: lesson
title: 'Percorrendo listas'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Percorrendo listas

Uma das coisas mais úteis que você pode fazer com listas é **percorrer** todos os itens, um por um.

## Usando `para` com listas

O laço `para` combina perfeitamente com listas. Use `.length` como limite:

```jscripto
deixe nomes = ["Ana", "Pedro", "Maria"]

para (deixe i = 0; i < nomes.length; i = i + 1) {
  imprima(nomes[i])
}
```

Isso imprime cada nome, um por linha.

## Somando valores

Um padrão muito comum e percorrer uma lista de números para calcular algo:

```jscripto
deixe notas = [8, 7, 9, 10]
deixe soma = 0

para (deixe i = 0; i < notas.length; i = i + 1) {
  soma = soma + notas[i]
}

imprima("Total: " + soma)
```

## Buscando um item

Voce também pode percorrer para encontrar algo:

```jscripto
deixe frutas = ["maca", "banana", "uva", "manga"]
deixe busca = "uva"

para (deixe i = 0; i < frutas.length; i = i + 1) {
  se (frutas[i] == busca) {
    imprima("Encontrei na posição " + i)
  }
}
```

## Sua vez!

Crie uma lista `numeros` com pelo menos 5 números. Depois, use um laço `para` para calcular e imprimir a **soma** de todos os números.

:::tip
O padrão `para (deixe i = 0; i < lista.length; i = i + 1)` é tão comum que vai virar automático com a prática!
:::
