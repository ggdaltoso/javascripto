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
