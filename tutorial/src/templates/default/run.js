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
    return;
  }

  if (source !== lastContent) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(run, 300);
  }
}

run();
setInterval(check, 500);
