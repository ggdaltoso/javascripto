---
type: lesson
title: 'Criando objetos'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Criando objetos

Listas são ótimas para guardar valores em sequência. Mas e quando você quer associar **nomes** a valores? Para isso existem os **objetos**.

Um objeto e criado com chaves `{}`:

```jscripto
deixe pessoa = { nome: "Ana", idade: 25, cidade: "Recife" }
imprima(pessoa)
```

Cada par `chave: valor` dentro do objeto é chamado de **propriedade**.

## Acessando propriedades

Use o ponto `.` para acessar uma propriedade:

```jscripto
deixe carro = { marca: "Fiat", modelo: "Uno", ano: 2020 }
imprima(carro.marca)   // "Fiat"
imprima(carro.ano)     // 2020
```

## Acesso com colchetes

Voce também pode usar colchetes com uma string:

```jscripto
deixe fruta = { nome: "banana", cor: "amarelo" }
imprima(fruta["nome"])  // "banana"
imprima(fruta["cor"])   // "amarelo"
```

Isso e útil quando o nome da propriedade está em uma variável:

```jscripto
deixe campo = "cor"
imprima(fruta[campo])  // "amarelo"
```

## Sua vez!

Crie um objeto `pessoa` com as propriedades `nome`, `idade` e `cidade`. Depois, imprima cada propriedade em uma linha separada.

:::tip
Objetos em JavaScripto funcionam igual aos objetos em JavaScript `{ chave: valor }`

Não precisa de nada novo!
:::
