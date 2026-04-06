---
type: lesson
title: 'Estado privado'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Estado privado

Closures permitem criar variáveis que só podem ser acessadas através de funções específicas, um tipo de **estado privado**:

```jscripto
funcao criarContador() {
  deixe contagem = 0

  funcao incrementar() {
    contagem = contagem + 1
    imprima(contagem)
  }

  retorne incrementar
}

deixe contador = criarContador()
contador()  // 1
contador()  // 2
contador()  // 3
```

`contagem` existe apenas dentro do closure. Ninguém de fora pode ler ou alterar `contagem` diretamente, só através de `incrementar`.

## Por que isso é útil?

Sem closures, `contagem` seria uma variável global que qualquer parte do código poderia alterar por acidente. Com o closure, ela fica **protegida**.

Cada closure tem seu próprio estado independente:

```jscripto
deixe contadorA = criarContador()
deixe contadorB = criarContador()

contadorA()  // 1
contadorA()  // 2
contadorB()  // 1  ← começa do zero, independente
```

## Sua vez!

Crie uma função `criarPlacar()` que retorna uma função `marcarPonto`. Cada vez que `marcarPonto` for chamada, ela deve incrementar e imprimir a pontuação. Crie dois placares independentes e marque alguns pontos em cada um.
