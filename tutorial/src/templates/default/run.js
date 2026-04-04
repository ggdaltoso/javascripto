import { readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

// Todas as lições usam o mesmo mainCommand para que o TutorialKit reutilize
// este processo em vez de matá-lo e criar outro. Isso mantém o pipe entre
// stdout e o painel "Saída" conectado durante toda a sessão.
//
// O polling (setInterval) detecta mudanças no arquivo — seja por edição do
// aluno ou por troca de lição (quando o TutorialKit sobrescreve o arquivo).
//
// prepareCommands é [] nas lições para evitar re-executar npm install a cada
// troca. Garantimos as dependências aqui com import() dinâmico.
if (!existsSync('node_modules/ohm-js')) {
  execSync('npm install', { stdio: 'inherit' });
}

const { transpile } = await import('./transpiler.js');

const file = process.argv[2] || 'programa.jscripto';
let lastContent = '';
let debounceTimer;

function execute(source) {
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
    // arquivo pode não existir durante troca de lição
    lastContent = '';
    return;
  }

  if (source !== lastContent) {
    lastContent = source;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => execute(source), 300);
  }
}

// executa imediatamente se o arquivo já existir
try {
  const source = readFileSync(file, 'utf-8');
  lastContent = source;
  execute(source);
} catch {
  // arquivo não existe ainda, espera o polling encontrá-lo
}

setInterval(check, 500);

// mantém o processo vivo
process.stdin.resume();
