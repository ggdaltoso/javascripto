import { StreamLanguage, HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import { Prec } from '@codemirror/state';

const keywords = new Set([
  'se', 'senao', 'enquanto', 'para', 'retorne',
  'deixe', 'fixe', 'funcao', 'classe', 'novo', 'construtor',
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
