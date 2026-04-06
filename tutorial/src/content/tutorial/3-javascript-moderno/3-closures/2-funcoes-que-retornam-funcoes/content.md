---
type: lesson
title: 'Funções que retornam funções'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Funções que retornam funções

Closures ficam poderosos quando você usa uma função para **fabricar** outras funções com comportamentos diferentes:

```jscripto
funcao criarSomador(valor) {
  funcao somar(n) {
    retorne n + valor
  }
  retorne somar
}

deixe somarCinco = criarSomador(5)
deixe somarDez = criarSomador(10)

imprima(somarCinco(3))   // 8
imprima(somarDez(3))     // 13
```

`criarSomador` é uma **fábrica de funções**: cada chamada cria uma função nova com seu próprio `valor` capturado.

## Cada closure é independente

```jscripto
deixe somarCinco = criarSomador(0)   // soma 0
deixe somarDez = criarSomador(0)     // também soma 0
```

Mesmo que os argumentos sejam iguais, `somarCinco` e `somarDez` são funções completamente separadas, cada uma com seu próprio closure.

## Sua vez!

Crie uma função `criarMultiplicador(fator)` que retorna uma função. A função retornada deve multiplicar qualquer número pelo `fator`. Crie `duplicar` (fator 2) e `triplicar` (fator 3) e teste com o número `4`.
