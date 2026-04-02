# JavaScripto

Plataforma de ensino de JavaScript para brasileiros.

O aluno aprende lógica de programação e JavaScript usando uma sintaxe em pt-BR. Palavras-chave como `se`, `senão`, `enquanto`, `função`, `retorne` são transpiladas para JavaScript válido antes de serem executada.

## Por que JavaScripto?

A barreira do idioma é real. Quem está aprendendo a programar lida simultaneamente com:

- Lógica de programação (o conceito em si)
- Sintaxe da linguagem (regras, símbolos, estrutura)
- Vocabulário em inglês (`function`, `return`, `while`, `catch`...)

JavaScripto remove a terceira barreira. O aluno foca em **entender** o que está fazendo, não em memorizar palavras em outro idioma. Quando estiver confortável com os conceitos, a transição para JavaScript padrão é natural.

## Como funciona

O aluno escreve código em pt-BR:

```
função saudacao(nome) {
  se (nome) {
    retorne "Olá, " + nome + "!"
  } senão {
    retorne "Olá, mundo!"
  }
}

imprima(saudacao("Maria"))
```

O transpilador converte para JavaScript válido:

```js
function saudacao(nome) {
  if (nome) {
    return 'Olá, ' + nome + '!';
  } else {
    return 'Olá, mundo!';
  }
}

console.log(saudacao('Maria'));
```

## Stack

- **[TutorialKit](https://tutorialkit.dev/)** — plataforma de tutoriais interativos
- **[Ohm.js](https://ohmjs.org/)** — gramática formal para o transpilador pt-BR → JS
- **CodeMirror 6** — editor com syntax highlighting e autocomplete para a sintaxe pt-BR

## Contribuindo

O projeto está em fase inicial de concepção. Veja a pasta `ideia/` para entender as decisões tomadas até agora.

## Licença

A definir.
