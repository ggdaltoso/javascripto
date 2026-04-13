import { StreamLanguage, HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import { Prec } from '@codemirror/state';
import { autocompletion, completeFromList } from '@codemirror/autocomplete';

const keywords = new Set([
  'se', 'senao', 'enquanto', 'para', 'retorne',
  'deixe', 'fixe', 'funcao', 'classe', 'novo', 'construtor',
  'quebre', 'continue', 'escolha', 'caso', 'padrao',
  'tente', 'capture', 'finalmente', 'lance',
]);

const builtins = new Set(['imprima']);

const constants = new Set(['verdadeiro', 'falso', 'nulo', 'isso']);

function tokenize(stream, state) {
  // Block comment continuation
  if (state.inBlockComment) {
    const endIdx = stream.string.indexOf('*/', stream.pos);
    if (endIdx === -1) {
      stream.skipToEnd();
    } else {
      stream.pos = endIdx + 2;
      state.inBlockComment = false;
    }
    return 'comment';
  }

  // Skip whitespace
  if (stream.eatSpace()) return null;

  const ch = stream.peek();

  // Line comment
  if (ch === '/' && stream.match('//')) {
    stream.skipToEnd();
    return 'comment';
  }

  // Block comment
  if (ch === '/' && stream.match('/*')) {
    const endIdx = stream.string.indexOf('*/', stream.pos);
    if (endIdx === -1) {
      stream.skipToEnd();
      state.inBlockComment = true;
    } else {
      stream.pos = endIdx + 2;
    }
    return 'comment';
  }

  // Strings
  if (ch === '"' || ch === "'") {
    const quote = stream.next();
    while (!stream.eol()) {
      const c = stream.next();
      if (c === '\\') {
        stream.next(); // skip escaped char
      } else if (c === quote) {
        break;
      }
    }
    return 'string';
  }

  // Numbers
  if (/\d/.test(ch)) {
    stream.match(/^\d+(\.\d+)?/);
    return 'number';
  }

  // Multi-char operators
  if (stream.match('===') || stream.match('!==') ||
      stream.match('==') || stream.match('!=') ||
      stream.match('<=') || stream.match('>=') ||
      stream.match('||') || stream.match('&&')) {
    return 'operator';
  }

  // Single-char operators
  if ('+-*/%<>=!'.includes(ch)) {
    stream.next();
    return 'operator';
  }

  // Punctuation
  if ('(){}[],;.'.includes(ch)) {
    stream.next();
    return 'punctuation';
  }

  // Identifiers and keywords
  if (/[a-zA-Z_$]/.test(ch)) {
    stream.match(/^[a-zA-Z0-9_$]*/);
    const word = stream.current();
    if (keywords.has(word)) return 'keyword';
    if (builtins.has(word)) return 'variableName.function';
    if (constants.has(word)) return 'atom';
    if (stream.match(/^\s*\(/, false)) return 'variableName.function';
    return 'variableName';
  }

  // Fallback: advance one char
  stream.next();
  return null;
}

// Fallback highlight for function/method names — applies in light mode where
// defaultHighlightStyle has no rule for tags.function(tags.variableName).
// In dark mode, vscodeDarkTheme takes precedence and overrides this with #dcdcaa.
export const javascriptoFunctionHighlight = Prec.lowest(
  syntaxHighlighting(
    HighlightStyle.define([
      {
        tag: [tags.function(tags.variableName), tags.function(tags.propertyName)],
        color: '#795E26',
      },
    ])
  )
);

// ── Autocomplete ──────────────────────────────────────────────────────────────

const keywordCompletions = [
  { label: 'deixe',      type: 'keyword', info: 'Declara uma variável reatribuível → let' },
  { label: 'fixe',       type: 'keyword', info: 'Declara uma constante → const' },
  { label: 'funcao',     type: 'keyword', info: 'Declara uma função → function' },
  { label: 'retorne',    type: 'keyword', info: 'Retorna um valor de uma função → return' },
  { label: 'se',         type: 'keyword', info: 'Executa um bloco se a condição for verdadeira → if' },
  { label: 'senao',      type: 'keyword', info: 'Bloco alternativo ao se → else' },
  { label: 'enquanto',   type: 'keyword', info: 'Repete enquanto a condição for verdadeira → while' },
  { label: 'para',       type: 'keyword', info: 'Laço com inicialização, condição e incremento → for' },
  { label: 'quebre',     type: 'keyword', info: 'Interrompe um laço ou escolha → break' },
  { label: 'continue',   type: 'keyword', info: 'Pula para a próxima iteração do laço → continue' },
  { label: 'escolha',    type: 'keyword', info: 'Seleciona entre múltiplos casos → switch' },
  { label: 'caso',       type: 'keyword', info: 'Define um caso dentro de escolha → case' },
  { label: 'padrao',     type: 'keyword', info: 'Caso padrão dentro de escolha → default' },
  { label: 'tente',      type: 'keyword', info: 'Tenta executar um bloco de código → try' },
  { label: 'capture',    type: 'keyword', info: 'Captura erros lançados no bloco tente → catch' },
  { label: 'finalmente', type: 'keyword', info: 'Executado ao fim de tente/capture → finally' },
  { label: 'lance',      type: 'keyword', info: 'Lança um erro → throw' },
  { label: 'classe',     type: 'keyword', info: 'Define uma classe → class' },
  { label: 'construtor', type: 'keyword', info: 'Método especial de inicialização de uma classe → constructor' },
  { label: 'novo',       type: 'keyword', info: 'Cria uma nova instância de uma classe → new' },
  { label: 'isso',       type: 'keyword', info: 'Referência ao objeto atual → this' },
  { label: 'assincrono', type: 'keyword', info: 'Marca uma função como assíncrona → async' },
  { label: 'aguarde',    type: 'keyword', info: 'Aguarda a resolução de uma promessa → await' },
  { label: 'importe',    type: 'keyword', info: 'Importa módulos ou valores → import' },
  { label: 'exporte',    type: 'keyword', info: 'Exporta valores de um módulo → export' },
  { label: 'de',         type: 'keyword', info: 'Especifica a origem de uma importação → from' },
  { label: 'como',       type: 'keyword', info: 'Renomeia um valor importado ou exportado → as' },
  { label: 'verdadeiro', type: 'constant', info: 'Valor booleano verdadeiro → true' },
  { label: 'falso',      type: 'constant', info: 'Valor booleano falso → false' },
  { label: 'nulo',       type: 'constant', info: 'Ausência intencional de valor → null' },
  { label: 'imprima',    type: 'function', info: 'Exibe um valor no console → console.log' },
];

const methodCompletions = [
  { label: 'tamanho',  type: 'property', info: 'Comprimento de uma lista ou string → .length' },
  { label: 'adicione', type: 'method',   info: 'Adiciona um elemento ao fim da lista → .push()' },
  { label: 'remova',   type: 'method',   info: 'Remove e retorna o último elemento da lista → .pop()' },
  { label: 'mapa',     type: 'method',   info: 'Transforma cada elemento da lista → .map()' },
  { label: 'filtre',   type: 'method',   info: 'Filtra elementos da lista por condição → .filter()' },
  { label: 'paraCada', type: 'method',   info: 'Itera sobre cada elemento da lista → .forEach()' },
  { label: 'reduza',   type: 'method',   info: 'Reduz a lista a um único valor → .reduce()' },
  { label: 'encontre', type: 'method',   info: 'Retorna o primeiro elemento que satisfaz a condição → .find()' },
  { label: 'inclui',   type: 'method',   info: 'Verifica se a lista contém o valor → .includes()' },
];

export const javascriptoCompletion = autocompletion({
  override: [completeFromList([...keywordCompletions, ...methodCompletions])],
});

// ─────────────────────────────────────────────────────────────────────────────

export const javascriptoLanguage = StreamLanguage.define({
  startState() {
    return { inBlockComment: false };
  },
  token: tokenize,
  languageData: {
    commentTokens: { line: '//', block: { open: '/*', close: '*/' } },
    closeBrackets: { brackets: ['(', '[', '{', "'", '"'] },
  },
});
