---
type: lesson
title: 'Modificando objetos'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Modificando objetos

Assim como listas, objetos podem ser **modificados** depois de criados.

## Alterando uma propriedade

Use o ponto e a atribuição:

```jscripto
deixe usuario = { nome: "Carlos", pontos: 10 }
usuario.pontos = 25
imprima(usuario.pontos)  // 25
```

## Adicionando propriedades

Voce pode adicionar novas propriedades a qualquer momento:

```jscripto
deixe produto = { nome: "Caderno" }
produto.preco = 15
produto.cor = "azul"
imprima(produto)
```

## Combinando com condicionais

Objetos ficam ainda mais uteis quando combinados com lógica:

```jscripto
deixe aluno = { nome: "Julia", nota: 8 }

se (aluno.nota >= 7) {
  aluno.situacao = "aprovado"
} senao {
  aluno.situacao = "reprovado"
}

imprima(aluno.nome + ": " + aluno.situacao)
```

## Sua vez!

1. Crie um objeto `filme` com `titulo` e `ano`
2. Adicione a propriedade `nota` (um numero de 0 a 10)
3. Use `se`/`senao` para adicionar `recomendado` como `verdadeiro` ou `falso` (nota >= 7)
4. Imprima o título e se é recomendado
