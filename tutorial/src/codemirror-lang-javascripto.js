import { StreamLanguage } from '@codemirror/language';

const keywords = new Set([
  'se', 'senao', 'enquanto', 'para', 'retorne',
  'deixe', 'fixe', 'funcao',
]);

const builtins = new Set(['imprima']);

const constants = new Set(['verdadeiro', 'falso', 'nulo']);

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
    if (builtins.has(word)) return 'variableName.standard';
    if (constants.has(word)) return 'atom';
    return 'variableName';
  }

  // Fallback: advance one char
  stream.next();
  return null;
}

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
