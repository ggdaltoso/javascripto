import * as ohm from 'ohm-js';
import grammarSource from './javascripto.ohm?raw';
import { buildSemantics, reindent } from './semantics.js';

const grammar = ohm.grammar(grammarSource);
const semantics = grammar.createSemantics();
buildSemantics(grammar, semantics);

export function transpile(source) {
  const matchResult = grammar.match(source);

  if (matchResult.failed()) {
    const error = new Error(`Erro de sintaxe: ${matchResult.shortMessage}`);
    error.name = 'ErroSintaxe';
    throw error;
  }

  return reindent(semantics(matchResult).toJS());
}
