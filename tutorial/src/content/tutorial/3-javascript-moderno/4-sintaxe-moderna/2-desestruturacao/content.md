---
type: lesson
title: 'Desestruturação'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Desestruturação

Desestruturação é um atalho para extrair valores de objetos e listas em variáveis separadas.

## Desestruturando objetos

Sem desestruturação:

```jscripto
deixe pessoa = { nome: "Ana", idade: 25, cidade: "Recife" }
deixe nome = pessoa.nome
deixe idade = pessoa.idade
```

Com desestruturação:

```jscripto
deixe pessoa = { nome: "Ana", idade: 25, cidade: "Recife" }
deixe {nome, idade} = pessoa
imprima(nome)   // "Ana"
imprima(idade)  // 25
```

Você extrai exatamente os campos que precisa, pelo nome. O restante é ignorado.

## Desestruturando listas

Com listas, a extração é por posição:

```jscripto
deixe cores = ["vermelho", "verde", "azul"]
deixe [primeira, segunda] = cores
imprima(primeira)  // "vermelho"
imprima(segunda)   // "verde"
```

Use `_` ou qualquer nome para pular uma posição que não interessa... mas não se preocupe com isso agora. O mais comum é extrair do início.

## Desestruturação em funções

É muito comum desestruturar o parâmetro de uma função:

```jscripto
deixe exibirProduto = ({nome, preco}) => {
  imprima(nome + ": R$ " + preco)
}

deixe produto = { nome: "Caderno", preco: 15, estoque: 100 }
exibirProduto(produto)
```

## Sua vez!

Declare `deixe produto = { nome: "Notebook", preco: 2500, estoque: 10 }`. Use desestruturação para extrair `nome` e `preco`. Imprima cada um em uma linha separada.
