---
type: lesson
title: 'Export default'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Export default

Quando um módulo tem um único export principal, use `exporte padrao`:

```jscripto
funcao saudar(nome) {
  retorne `Olá, ${nome}!`
}

exporte padrao saudar

imprima(saudar("Ana"))   // Olá, Ana!
```

Ao importar um export default, você escolhe o nome livremente (sem chaves):

```jscripto
importe saudar de './saudacao.jscripto'
importe cumprimentar de './saudacao.jscripto'  // mesmo módulo, nome diferente
```

## Comparando com export nomeado

```jscripto
// Export nomeado: importado com { chaves }
exporte funcao soma(a, b) { retorne a + b }

// Export default: importado sem chaves, com qualquer nome
exporte padrao soma
```

## Valores como default

Qualquer expressão pode ser o export default:

```jscripto
exporte padrao 42
exporte padrao "JavaScripto"
exporte padrao [1, 2, 3]
```

## Sua vez!

Declare uma função `dobrar(n)` que retorna `n * 2`. Exporte-a como `exporte padrao` e imprima `dobrar(7)` e `dobrar(15)`.
