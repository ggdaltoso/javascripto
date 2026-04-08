import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';

// Todas as lições usam o mesmo mainCommand para que o TutorialKit reutilize
// este processo em vez de matá-lo e criar outro. Isso mantém o pipe entre
// stdout e o painel "Saída" conectado durante toda a sessão.
//
// O polling (setInterval) detecta mudanças no arquivo — seja por edição do
// aluno ou por troca de lição (quando o TutorialKit sobrescreve o arquivo).
//
// O TutorialKit roda o prepareCommand ("npm install") do meta.md raiz uma vez
// no boot e não re-executa ao trocar de lição (desde que os comandos sejam
// idênticos). Esta verificação serve apenas como fallback de segurança.
if (!existsSync('node_modules/ohm-js')) {
  execSync('npm install', { stdio: 'inherit' });
}

const { transpile } = await import('./transpiler.js');

const file = process.argv[2] || 'programa.jscripto';
let lastContent = '';
let debounceTimer;

function transpileOthers() {
  for (const name of readdirSync('.')) {
    if (!name.endsWith('.jscripto') || name === file) continue;
    try {
      const src = readFileSync(name, 'utf-8');
      writeFileSync(name.replace('.jscripto', '.js'), transpile(src));
    } catch {
      // ignora erros em outros arquivos
    }
  }
}

function execute(source) {
  console.clear();

  const expected = existsSync('_expected.txt')
    ? readFileSync('_expected.txt', 'utf-8').trim()
    : null;

  try {
    transpileOthers();
    const js = transpile(source);
    let actual = null;

    if (/^(import|export)\b/m.test(js)) {
      writeFileSync('_programa.mjs', js);
      try {
        if (expected !== null) {
          const output = execSync('node _programa.mjs', { encoding: 'utf-8' });
          process.stdout.write(output);
          actual = output.trim();
        } else {
          execSync('node _programa.mjs', { stdio: 'inherit' });
        }
      } catch (e) {
        if (e.stdout) process.stdout.write(e.stdout);
        if (e.stderr) process.stderr.write(e.stderr);
      }
    } else {
      if (expected !== null) {
        const lines = [];
        const origLog = console.log;
        console.log = (...args) => {
          const line = args.map(String).join(' ');
          lines.push(line);
          origLog(...args);
        };
        try {
          new Function(js)();
        } finally {
          console.log = origLog;
        }
        actual = lines.join('\n');
      } else {
        new Function(js)();
      }
    }

    if (expected !== null && actual !== null) {
      console.log(
        actual === expected
          ? '\n\x1b[1;32m✓\x1b[0m Correto!'
          : '\n\x1b[1;31m⨯\x1b[0m Saída incorreta. Tente novamente.',
      );
    }
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
