---
type: lesson
title: 'Tratando erros assíncronos'
template: default
focus: /programa.jscripto
prepareCommands: []
mainCommand: ['node run.js programa.jscripto', 'JavaScripto']
---

# Tratando erros assíncronos

Funções assíncronas podem falhar. Para capturar esses erros, use `tente`/`capture` normalmente. Funciona igual ao código síncrono:

```jscripto
assincrono funcao buscarDados(id) {
  se (id <= 0) {
    lance novo Erro("ID inválido")
  }
  retorne "dados do id " + id
}

assincrono funcao principal() {
  tente {
    deixe resultado = aguarde buscarDados(-1)
    imprima(resultado)
  } capture (e) {
    imprima("Erro: " + e.mensagem)
  }
}

principal()
```

Quando `aguarde` encontra um erro na função aguardada, ele **joga** o erro para o `capture` mais próximo.

## Por que isso é útil?

Sem `tente`/`capture`, um erro numa função assíncrona seria silencioso. O programa continuaria sem avisar que algo deu errado.

Com `tente`/`capture`, você trata o problema e dá um feedback claro.

## Sua vez!

A função `autenticar(senha)` lança um erro se a senha for errada. Chame-a dentro de um `tente`/`capture` e imprima a mensagem de erro caso falhe. Use a senha `"errada"` para testar.
