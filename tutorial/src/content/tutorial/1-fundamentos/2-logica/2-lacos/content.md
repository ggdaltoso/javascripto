---
type: lesson
title: Laços
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ["node run.js programa.jscripto 5", "JavaScripto"]
---

# Laços

Laços (loops) permitem repetir ações. JavaScripto tem dois tipos principais: `enquanto` e `para`.

## enquanto

Repete **enquanto** a condição for verdadeira (equivalente a `while`):

```jscripto
deixe contador = 1

enquanto (contador <= 5) {
  imprima(contador)
  contador = contador + 1
}
```

Isso imprime os números de 1 a 5.

:::caution
Cuidado para não criar um laço infinito! A condição precisa se tornar `falso` em algum momento.
:::

## para

Ideal quando você sabe quantas vezes quer repetir (equivalente a `for`):

```jscripto
para (deixe i = 0; i < 5; i = i + 1) {
  imprima(i)
}
```

O `para` tem três partes separadas por `;`:
1. **Início**: `deixe i = 0` — cria a variável do laço
2. **Condição**: `i < 5` — repete enquanto for verdadeira
3. **Passo**: `i = i + 1` — executa após cada repetição

## Sua vez!

Use um laço `para` para imprimir os números de 1 a 10.

:::tip
`enquanto` equivale a `while` e `para` equivale a `for` em JavaScript.
:::
