---
type: lesson
title: 'Criando listas'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Criando listas

Até agora, cada variável guardava um único valor. Mas e se você quiser guardar **vários valores juntos**? Para isso existem as **listas** (ou arrays).

Uma lista é criada com colchetes `[]`:

```jscripto
deixe frutas = ["maca", "banana", "uva"]
imprima(frutas)
```

## Acessando itens

Cada item da lista tem uma **posição** (índice), começando do **0**:

```jscripto
deixe cores = ["vermelho", "azul", "verde"]
imprima(cores[0])  // "vermelho"
imprima(cores[1])  // "azul"
imprima(cores[2])  // "verde"
```

:::tip
O primeiro item está na posição `0`, não `1`. Isso é uma convenção em quase todas as linguagens de programação!
:::

## Quantos itens tem?

Use `.tamanho` para saber o tamanho da lista:

```jscripto
deixe numeros = [10, 20, 30, 40]
imprima(numeros.tamanho)  // 4
```

## Lista vazia

Você pode criar uma lista vazia e adicionar itens depois:

```jscripto
deixe lista = []
imprima(lista.tamanho)  // 0
```

## Sua vez!

Crie uma lista chamada `frutas` com pelo menos 3 frutas. Depois, imprima:

1. A primeira fruta
2. A última fruta
3. O total de frutas na lista
