import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';
import { transpile } from '../src/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tutorialRoot = join(__dirname, '..', '..', '..', 'tutorial', 'src', 'content', 'tutorial');
const templateRoot = join(__dirname, '..', '..', '..', 'tutorial', 'src', 'templates', 'default');

/**
 * Coleta todos os arquivos .jscripto recursivamente a partir de um diretório.
 */
function collectJscriptoFiles(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      collectJscriptoFiles(fullPath, files);
    } else if (entry.name.endsWith('.jscripto')) {
      files.push(fullPath);
    }
  }
  return files;
}

describe('arquivos de lição (_solution)', () => {
  const solutionFiles = collectJscriptoFiles(tutorialRoot)
    .filter(f => f.includes('_solution'));

  it.each(solutionFiles.map(f => [relative(tutorialRoot, f), f]))(
    '%s transpila sem erros',
    (_label, filePath) => {
      const source = readFileSync(filePath, 'utf-8');
      const js = transpile(source);
      expect(js).toBeTruthy();
    },
  );

  it.each(solutionFiles.map(f => [relative(tutorialRoot, f), f]))(
    '%s gera JS válido (sem SyntaxError)',
    (_label, filePath) => {
      const source = readFileSync(filePath, 'utf-8');
      const js = transpile(source);
      // Módulos ESM (import/export) não podem ser validados com new Function
      if (/^(import|export)\b/m.test(js)) return;
      // Verifica que o JS gerado é sintaticamente válido
      expect(() => new Function(js)).not.toThrow();
    },
  );
});

describe('arquivos iniciais (_files)', () => {
  const initialFiles = collectJscriptoFiles(tutorialRoot)
    .filter(f => f.includes('_files'));

  it.each(initialFiles.map(f => [relative(tutorialRoot, f), f]))(
    '%s transpila sem erros',
    (_label, filePath) => {
      const source = readFileSync(filePath, 'utf-8');
      // Não deve lançar erro — resultado pode ser vazio (ex: só comentários)
      expect(() => transpile(source)).not.toThrow();
    },
  );
});

describe('template runner', () => {
  it('transpiler.js existe no template', () => {
    const transpilerPath = join(templateRoot, 'transpiler.js');
    expect(statSync(transpilerPath).isFile()).toBe(true);
  });

  it('transpiler.js do template é idêntico ao index.js do pacote', () => {
    const packageTranspiler = readFileSync(join(__dirname, '..', 'src', 'index.js'), 'utf-8');
    const templateTranspiler = readFileSync(join(templateRoot, 'transpiler.js'), 'utf-8');
    expect(templateTranspiler).toBe(packageTranspiler);
  });

  it('semantics.js existe no template', () => {
    const semanticsPath = join(templateRoot, 'semantics.js');
    expect(statSync(semanticsPath).isFile()).toBe(true);
  });

  it('semantics.js do template é idêntico ao do pacote', () => {
    const packageSemantics = readFileSync(join(__dirname, '..', 'src', 'semantics.js'), 'utf-8');
    const templateSemantics = readFileSync(join(templateRoot, 'semantics.js'), 'utf-8');
    expect(templateSemantics).toBe(packageSemantics);
  });

  it('javascripto.ohm existe no template', () => {
    const grammarPath = join(templateRoot, 'javascripto.ohm');
    expect(statSync(grammarPath).isFile()).toBe(true);
  });

  it('gramática do template é idêntica à do pacote', () => {
    const packageGrammar = readFileSync(join(__dirname, '..', 'src', 'javascripto.ohm'), 'utf-8');
    const templateGrammar = readFileSync(join(templateRoot, 'javascripto.ohm'), 'utf-8');
    expect(templateGrammar).toBe(packageGrammar);
  });

  it('run.js existe no template', () => {
    const runPath = join(templateRoot, 'run.js');
    expect(statSync(runPath).isFile()).toBe(true);
  });
});
