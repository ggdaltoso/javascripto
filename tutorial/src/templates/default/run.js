import { readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

// Quando o mainCommand é o mesmo entre lições, o TutorialKit reutiliza o processo
// em vez de reiniciá-lo. Porém, ao trocar de lição, o pipe entre o processo e o
// painel de output é desconectado. O processo continua rodando mas a saída não
// aparece mais na tela.
//
// Para forçar o restart, cada lição define um mainCommand ligeiramente diferente
// (ex: "node run.js programa.jscripto 1", "... 2", etc.) e sobrescreve
// prepareCommands com [] para evitar re-executar npm install a cada troca.
//
// Como prepareCommands é vazio nas lições, garantimos as dependências aqui. Usamos
// import() dinâmico (não estático) porque imports ESM são resolvidos antes de
// qualquer código executar — o existsSync/execSync precisa rodar primeiro.
if (!existsSync('node_modules/ohm-js')) {
  execSync('npm install', { stdio: 'inherit' });
}

const { transpile } = await import('./transpiler.js');

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
