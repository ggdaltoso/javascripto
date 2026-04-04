---
type: lesson
title: 'Modificando listas'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Modificando listas

Listas não são estaticas — você pode **adicionar**, **remover** e **alterar** itens.

## Alterando um item

Use o índice para trocar o valor de uma posição:

```jscripto
deixe cores = ["vermelho", "azul", "verde"]
cores[1] = "amarelo"
imprima(cores)  // ["vermelho", "amarelo", "verde"]
```

## Adicionando itens

Use `.push()` para adicionar um item **no final** da lista:

```jscripto
deixe frutas = ["maca", "banana"]
frutas.push("uva")
imprima(frutas)  // ["maca", "banana", "uva"]
```

## Removendo o último item

Use `.pop()` para remover e retornar o **último** item:

```jscripto
deixe numeros = [1, 2, 3]
deixe ultimo = numeros.pop()
imprima(ultimo)   // 3
imprima(numeros)  // [1, 2]
```

## Sua vez!

1. Crie uma lista `tarefas` com duas tarefas (strings)
2. Adicione uma terceira tarefa com `.push()`
3. Altere a primeira tarefa para algo diferente
4. Imprima a lista final

:::tip
`.push()` e `.pop()` são métodos — funções que pertencem a lista. Eles vem do JavaScript e funcionam igualzinho no JavaScripto!
:::
