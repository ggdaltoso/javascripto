---
type: lesson
title: 'Espalhamento'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Espalhamento

O operador de espalhamento `...` "abre" uma lista ou objeto dentro de outro.

## Combinando listas

```jscripto
deixe frutas = ["maca", "banana", "uva"]
deixe verduras = ["cenoura", "alface"]

deixe compras = [...frutas, ...verduras]
imprima(compras)
// ["maca", "banana", "uva", "cenoura", "alface"]
```

## Combinando objetos

O mesmo operador funciona com objetos, copiando todas as propriedades:

```jscripto
deixe base = { nome: "Ana", idade: 25 }
deixe extra = { cidade: "Recife", ativo: verdadeiro }

deixe completo = {...base, ...extra}
imprima(completo)
// { nome: "Ana", idade: 25, cidade: "Recife", ativo: true }
```

Propriedades declaradas depois sobrescrevem as anteriores:

```jscripto
deixe modelo = { cor: "azul", tamanho: "M" }
deixe personalizado = {...modelo, cor: "vermelho"}
imprima(personalizado)
// { cor: "vermelho", tamanho: "M" }
```

## Adicionando elementos sem modificar o original

O espalhamento sempre cria um valor novo, sem alterar o original:

```jscripto
deixe numeros = [1, 2, 3]
deixe maisNumeros = [...numeros, 4, 5]
imprima(numeros)      // [1, 2, 3]  (original intacta)
imprima(maisNumeros)  // [1, 2, 3, 4, 5]

deixe usuario = { nome: "Pedro", admin: falso }
deixe usuarioAdmin = {...usuario, admin: verdadeiro}
imprima(usuario.admin)       // false  (original intacto)
imprima(usuarioAdmin.admin)  // true
```

## Em chamadas de função

O `...` também passa os elementos de uma lista como argumentos separados:

```jscripto
deixe valores = [10, 20, 30]
imprima(...valores)  // equivale a imprima(10, 20, 30)
```

## Sua vez!

Crie um objeto `endereco` com `rua` e `cidade`. Crie um objeto `pessoa` com `nome` e `idade`. Use espalhamento para criar `ficha` combinando os dois. Imprima `ficha`.
