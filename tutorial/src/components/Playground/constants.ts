export interface FileEntry {
  name: string;
  content: string;
}

export const DEFAULT_CODE = `funcao saudacao(nome) {
  retorne "Olá, " + nome + "!"
}

deixe mensagem = saudacao("mundo")
imprima(mensagem)
`;

export const KEYWORDS: { pt: string; js: string }[] = [
  { pt: 'deixe', js: 'let' },
  { pt: 'fixe', js: 'const' },
  { pt: 'funcao', js: 'function' },
  { pt: 'retorne', js: 'return' },
  { pt: 'se', js: 'if' },
  { pt: 'senao', js: 'else' },
  { pt: 'enquanto', js: 'while' },
  { pt: 'para', js: 'for' },
  { pt: 'verdadeiro', js: 'true' },
  { pt: 'falso', js: 'false' },
  { pt: 'nulo', js: 'null' },
  { pt: 'imprima', js: 'console.log' },
  { pt: 'classe', js: 'class' },
  { pt: 'novo', js: 'new' },
  { pt: 'isso', js: 'this' },
  { pt: 'construtor', js: 'constructor' },
  { pt: 'quebre', js: 'break' },
  { pt: 'continue', js: 'continue' },
  { pt: 'escolha', js: 'switch' },
  { pt: 'caso', js: 'case' },
  { pt: 'padrao', js: 'default' },
  { pt: 'tente', js: 'try' },
  { pt: 'capture', js: 'catch' },
  { pt: 'finalmente', js: 'finally' },
  { pt: 'lance', js: 'throw' },
  { pt: 'assincrono', js: 'async' },
  { pt: 'aguarde', js: 'await' },
  { pt: 'importe', js: 'import' },
  { pt: 'exporte', js: 'export' },
  { pt: 'de', js: 'from' },
  { pt: 'como', js: 'as' },
];

export interface Template {
  label: string;
  code: string;
}

export const TEMPLATES: Template[] = [
  {
    label: 'Olá, mundo',
    code: `funcao saudacao(nome) {
  retorne "Olá, " + nome + "!"
}

deixe mensagem = saudacao("mundo")
imprima(mensagem)
`,
  },
  {
    label: 'FizzBuzz',
    code: `para (deixe i = 1; i <= 20; i++) {
  se (i % 15 === 0) {
    imprima("FizzBuzz")
  } senao se (i % 3 === 0) {
    imprima("Fizz")
  } senao se (i % 5 === 0) {
    imprima("Buzz")
  } senao {
    imprima(i)
  }
}
`,
  },
  {
    label: 'Fibonacci',
    code: `funcao fibonacci(n) {
  se (n <= 1) {
    retorne n
  }
  retorne fibonacci(n - 1) + fibonacci(n - 2)
}

para (deixe i = 0; i < 10; i++) {
  imprima(fibonacci(i))
}
`,
  },
  {
    label: 'Fatorial',
    code: `funcao fatorial(n) {
  se (n <= 1) {
    retorne 1
  }
  retorne n * fatorial(n - 1)
}

imprima(fatorial(5))
imprima(fatorial(10))
`,
  },
  {
    label: 'Palíndromo',
    code: `funcao palindromo(palavra) {
  deixe invertida = palavra.split("").reverse().join("")
  retorne palavra === invertida
}

imprima(palindromo("arara"))
imprima(palindromo("banana"))
`,
  },
  {
    label: 'Ordenação por bolha',
    code: `funcao ordenar(lista) {
  deixe arr = [...lista]
  para (deixe i = 0; i < arr.tamanho; i++) {
    para (deixe j = 0; j < arr.tamanho - i - 1; j++) {
      se (arr[j] > arr[j + 1]) {
        deixe temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  retorne arr
}

deixe numeros = [64, 34, 25, 12, 22, 11, 90]
imprima(ordenar(numeros))
`,
  },
  {
    label: 'Contador de palavras',
    code: `funcao contarPalavras(texto) {
  deixe palavras = texto.split(" ")
  deixe contagem = {}
  palavras.paraCada(p => {
    contagem[p] = (contagem[p] || 0) + 1
  })
  retorne contagem
}

deixe texto = "o rato roeu a roupa do rei de roma"
imprima(contarPalavras(texto))
`,
  },
  {
    label: 'Classe — Pilha',
    code: `classe Pilha {
  construtor() {
    isso.itens = []
  }

  adicionar(item) {
    isso.itens.adicione(item)
  }

  retirar() {
    retorne isso.itens.remova()
  }

  topo() {
    retorne isso.itens[isso.itens.tamanho - 1]
  }

  vazia() {
    retorne isso.itens.tamanho === 0
  }
}

deixe pilha = novo Pilha()
pilha.adicionar(1)
pilha.adicionar(2)
pilha.adicionar(3)
imprima(pilha.topo())
imprima(pilha.retirar())
imprima(pilha.topo())
`,
  },
];

export const METHODS: { pt: string; js: string }[] = [
  { pt: '.tamanho', js: '.length' },
  { pt: '.adicione()', js: '.push()' },
  { pt: '.remova()', js: '.pop()' },
  { pt: '.mapa()', js: '.map()' },
  { pt: '.filtre()', js: '.filter()' },
  { pt: '.paraCada()', js: '.forEach()' },
  { pt: '.reduza()', js: '.reduce()' },
  { pt: '.encontre()', js: '.find()' },
  { pt: '.inclui()', js: '.includes()' },
];
