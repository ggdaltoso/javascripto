import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import * as ohm from 'ohm-js';
import { buildSemantics, reindent } from './semantics.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const grammarSource = readFileSync(join(__dirname, 'javascripto.ohm'), 'utf-8');
const grammar = ohm.grammar(grammarSource);
const semantics = grammar.createSemantics();
buildSemantics(grammar, semantics);

/**
 * Transpila código JavaScripto (pt-BR) para JavaScript válido.
 *
 * @param {string} source — código em sintaxe pt-BR
 * @returns {string} — código JavaScript equivalente
 * @throws {Error} — erro de sintaxe com mensagem em português
 */
export function transpile(source) {
  const matchResult = grammar.match(source);

  if (matchResult.failed()) {
    const error = new Error(`Erro de sintaxe: ${matchResult.shortMessage}`);
    error.name = 'ErroSintaxe';
    throw error;
  }

  return reindent(semantics(matchResult).toJS());
}

export { grammar };
