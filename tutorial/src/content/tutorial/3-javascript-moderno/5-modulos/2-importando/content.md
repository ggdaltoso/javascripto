---
type: lesson
title: 'Importando funções'
template: default
focus: /programa.jscripto
editor:
  fileTree: true
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Importando funções

Para usar o que outro arquivo exporta, use `importe`:

```jscripto
importe { soma, multiplica } de './matematica.jscripto'

imprima(soma(10, 5))       // 15
imprima(multiplica(4, 3))  // 12
```

O caminho `'./matematica.jscripto'` indica o arquivo a importar, relativo ao arquivo atual.

## Renomeando ao importar

Se quiser usar um nome diferente no arquivo atual, use `como`:

```jscripto
importe { soma como adicionar } de './matematica.jscripto'

imprima(adicionar(3, 7))  // 10
```

## Importando tudo

Para importar todas as exportações de um módulo como um objeto, use `*`:

```jscripto
importe * como Mat de './matematica.jscripto'

imprima(Mat.soma(2, 3))       // 5
imprima(Mat.multiplica(4, 5)) // 20
```

## Sua vez!

O arquivo `matematica.jscripto` já está disponível com as funções `soma`, `subtrai` e `multiplica`. Importe `soma` e `multiplica` de `'./matematica.jscripto'`, depois imprima `soma(10, 5)` e `multiplica(4, 3)`.
