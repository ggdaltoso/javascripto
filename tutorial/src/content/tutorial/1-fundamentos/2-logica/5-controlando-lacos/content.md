---
type: lesson
title: 'Controlando laços'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Controlando laços

Às vezes você quer parar um laço antes do fim, ou pular uma iteração. JavaScripto tem duas palavras para isso: `quebre` e `continue`.

## quebre: interrompe o laço

```jscripto
para (deixe i = 1; i <= 10; i = i + 1) {
  se (i === 6) {
    quebre
  }
  imprima(i)
}
```

O laço imprime 1, 2, 3, 4, 5 e para quando `i` chega a 6.

## continue: pula para a próxima iteração

```jscripto
para (deixe i = 1; i <= 10; i = i + 1) {
  se (i % 2 === 0) {
    continue
  }
  imprima(i)
}
```

O `continue` pula o resto do bloco e vai direto para a próxima repetição. Isso imprime só os ímpares: 1, 3, 5, 7, 9.

## Sua vez!

Use `quebre` para encontrar e imprimir o primeiro número divisível por 7 entre 1 e 100.

:::tip
`quebre` equivale a `break` em JavaScript. `continue` tem o mesmo nome nos dois.
:::
