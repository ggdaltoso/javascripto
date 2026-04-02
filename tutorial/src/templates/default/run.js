import { readFileSync } from 'node:fs';
import { transpile } from './transpiler.js';

const file = process.argv[2] || 'programa.jscripto';
let lastContent = '';
let debounceTimer;

function run() {
  let source;

  try {
    source = readFileSync(file, 'utf-8');
  } catch {
    // arquivo ainda não existe, tenta novamente depois
    lastContent = '';
    return;
  }

  if (source === lastContent) {
    return;
  }

  lastContent = source;
  console.clear();

  try {
    const js = transpile(source);
    const fn = new Function(js);
    fn();
  } catch (error) {
    console.error(error.message);
  }
}

function check() {
  let source;

  try {
    source = readFileSync(file, 'utf-8');
  } catch {
    // arquivo pode ter sido removido durante troca de lição
    if (lastContent !== '') {
      lastContent = '';
    }
    return;
  }

  if (source !== lastContent) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(run, 300);
  }
}

// executa imediatamente, mas tenta de novo se o arquivo ainda não existir
function init() {
  try {
    readFileSync(file, 'utf-8');
    run();
  } catch {
    // arquivo não existe ainda, espera o polling encontrá-lo
  }
}

init();
setInterval(check, 500);

// mantém o processo vivo
process.stdin.resume();
