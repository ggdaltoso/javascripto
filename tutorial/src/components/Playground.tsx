import { useCallback, useEffect, useRef, useState } from 'react';
import CodeMirrorEditor from '@tutorialkit/react/core/CodeMirrorEditor';
import { Terminal } from '@tutorialkit/react/core/Terminal';
import type { TerminalRef } from '@tutorialkit/react/core/Terminal';
import type { Theme } from '@tutorialkit/react';
import { WebContainer } from '@webcontainer/api';
import { transpile } from '@javascripto/transpiler/browser';

// Template files — inlined at build time via Vite's ?raw import
import runJsSrc from '../templates/default/run.js?raw';
import transpilerSrc from '../templates/default/transpiler.js?raw';
import ohmSrc from '../templates/default/javascripto.ohm?raw';
import packageSrc from '../templates/default/package.json?raw';

// ── Types ─────────────────────────────────────────────────────────────────────

interface FileEntry {
  name: string;
  content: string;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const DEFAULT_CODE = `funcao saudacao(nome) {
  retorne "Olá, " + nome + "!"
}

deixe mensagem = saudacao("mundo")
imprima(mensagem)
`;

const KEYWORDS: { pt: string; js: string }[] = [
  { pt: 'deixe', js: 'let' },
  { pt: 'fixe', js: 'const' },
  { pt: 'funcao', js: 'function' },
  { pt: 'retorne', js: 'return' },
  { pt: 'se', js: 'if' },
  { pt: 'senao', js: 'else' },
  { pt: 'enquanto', js: 'while' },
  { pt: 'para', js: 'for' },
  { pt: 'verdadeiro', js: 'true' },
  { pt: 'falso', js: 'false' },
  { pt: 'nulo', js: 'null' },
  { pt: 'imprima', js: 'console.log' },
  { pt: 'classe', js: 'class' },
  { pt: 'novo', js: 'new' },
  { pt: 'isso', js: 'this' },
  { pt: 'construtor', js: 'constructor' },
  { pt: 'quebre', js: 'break' },
  { pt: 'continue', js: 'continue' },
  { pt: 'escolha', js: 'switch' },
  { pt: 'caso', js: 'case' },
  { pt: 'padrao', js: 'default' },
  { pt: 'tente', js: 'try' },
  { pt: 'capture', js: 'catch' },
  { pt: 'finalmente', js: 'finally' },
  { pt: 'lance', js: 'throw' },
  { pt: 'assincrono', js: 'async' },
  { pt: 'aguarde', js: 'await' },
  { pt: 'importe', js: 'import' },
  { pt: 'exporte', js: 'export' },
  { pt: 'de', js: 'from' },
  { pt: 'como', js: 'as' },
];

const METHODS: { pt: string; js: string }[] = [
  { pt: '.tamanho', js: '.length' },
  { pt: '.adicione()', js: '.push()' },
  { pt: '.remova()', js: '.pop()' },
  { pt: '.mapa()', js: '.map()' },
  { pt: '.filtre()', js: '.filter()' },
  { pt: '.paraCada()', js: '.forEach()' },
  { pt: '.reduza()', js: '.reduce()' },
  { pt: '.encontre()', js: '.find()' },
  { pt: '.inclui()', js: '.includes()' },
];

// Singleton: WebContainer can only be booted once per page
let wcInstance: WebContainer | null = null;
let wcBootPromise: Promise<WebContainer> | null = null;

function getWebContainer(): Promise<WebContainer> {
  if (wcInstance) return Promise.resolve(wcInstance);
  if (!wcBootPromise) {
    wcBootPromise = WebContainer.boot().then(wc => {
      wcInstance = wc;
      return wc;
    });
  }
  return wcBootPromise;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Playground() {
  // Theme is read from the html[data-theme] attribute set by TutorialKit
  const [theme, setTheme] = useState<Theme>('dark');

  const [files, setFiles] = useState<FileEntry[]>([
    { name: 'programa.jscripto', content: DEFAULT_CODE },
  ]);
  const [activeFile, setActiveFile] = useState('programa.jscripto');
  const [jsOutput, setJsOutput] = useState(() => { try { return transpile(DEFAULT_CODE); } catch { return ''; } });
  const [transpileError, setTranspileError] = useState<string | null>(null);
  const [wcStatus, setWcStatus] = useState<'booting' | 'installing' | 'ready' | 'error'>('booting');
  const [showTable, setShowTable] = useState(true);
  const [newFileName, setNewFileName] = useState('');
  const [showNewFileInput, setShowNewFileInput] = useState(false);

  const terminalRef = useRef<TerminalRef>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const xtermRef = useRef<any>(null);
  const writeDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wcRef = useRef<WebContainer | null>(null);

  // ── Theme sync ──────────────────────────────────────────────────────────────

  useEffect(() => {
    const readTheme = () => {
      const t = document.documentElement.getAttribute('data-theme');
      if (t === 'dark' || t === 'light') setTheme(t);
    };
    readTheme();

    const observer = new MutationObserver(readTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  // ── WebContainer init ───────────────────────────────────────────────────────

  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        const wc = await getWebContainer();
        if (!mounted) return;
        wcRef.current = wc;

        await wc.mount({
          'run.js': { file: { contents: runJsSrc } },
          'transpiler.js': { file: { contents: transpilerSrc } },
          'javascripto.ohm': { file: { contents: ohmSrc } },
          'package.json': { file: { contents: packageSrc } },
          'programa.jscripto': { file: { contents: DEFAULT_CODE } },
        });

        setWcStatus('installing');

        const install = await wc.spawn('npm', ['install']);
        install.output.pipeTo(new WritableStream({
          write(data) { xtermRef.current?.write(data); },
        }));
        const exitCode = await install.exit;

        if (!mounted) return;

        if (exitCode !== 0) {
          setWcStatus('error');
          return;
        }

        setWcStatus('ready');

        const process = await wc.spawn('node', ['run.js', 'programa.jscripto']);
        process.output.pipeTo(new WritableStream({
          write(data) { xtermRef.current?.write(data); },
        }));
      } catch (e) {
        if (!mounted) return;
        setWcStatus('error');
        console.error('WebContainer error:', e);
      }
    }

    init();

    return () => { mounted = false; };
  }, []);

  // ── Write to WebContainer FS ────────────────────────────────────────────────

  const writeToWC = useCallback((name: string, content: string) => {
    if (!wcRef.current) return;
    wcRef.current.fs.writeFile(name, content).catch(() => {});
  }, []);

  // ── Editor change ───────────────────────────────────────────────────────────

  const handleEditorChange = useCallback(({ content }: { content: string }) => {
    // Update file content in state
    setFiles(prev => prev.map(f => f.name === activeFile ? { ...f, content } : f));

    // Browser-side transpile for the JS output panel
    try {
      setJsOutput(transpile(content));
      setTranspileError(null);
    } catch (e: unknown) {
      setTranspileError(e instanceof Error ? e.message : String(e));
    }

    // Debounce the WebContainer write so we don't thrash on every keystroke
    if (writeDebounceRef.current) clearTimeout(writeDebounceRef.current);
    writeDebounceRef.current = setTimeout(() => writeToWC(activeFile, content), 150);
  }, [activeFile, writeToWC]);

  // ── File operations ─────────────────────────────────────────────────────────

  const switchFile = useCallback((name: string) => {
    if (name === activeFile) return;
    setActiveFile(name);
  }, [activeFile]);

  const createFile = useCallback(() => {
    let name = newFileName.trim();
    if (!name) return;
    if (!name.endsWith('.jscripto')) name += '.jscripto';
    if (files.some(f => f.name === name)) return;

    const newFile: FileEntry = { name, content: '' };
    setFiles(prev => [...prev, newFile]);
    setNewFileName('');
    setShowNewFileInput(false);
    setActiveFile(name);
    writeToWC(name, '');
  }, [newFileName, files, writeToWC]);

  const deleteFile = useCallback((name: string) => {
    if (files.length === 1) return;
    setFiles(prev => {
      const remaining = prev.filter(f => f.name !== name);
      if (activeFile === name) setActiveFile(remaining[0].name);
      return remaining;
    });
    wcRef.current?.fs.rm(name).catch(() => {});
  }, [files, activeFile]);

  // ── Derived: current doc for CodeMirrorEditor ───────────────────────────────

  const activeContent = files.find(f => f.name === activeFile)?.content ?? '';
  const editorDoc = { value: activeContent, loading: false, filePath: `/${activeFile}` };

  // ── Status overlay text ─────────────────────────────────────────────────────

  const statusText =
    wcStatus === 'booting' ? 'Iniciando WebContainer...' :
    wcStatus === 'installing' ? 'Instalando dependências...' :
    wcStatus === 'error' ? 'Erro ao inicializar o WebContainer.' :
    null;

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="pg-root">
      {/* Top row */}
      <div className="pg-top">

        {/* Left: file tree + CodeMirror editor */}
        <div className="pg-panel pg-editor-panel">
          <div className="pg-panel-header">
            <span className="pg-lang-dot" />
            JavaScripto
          </div>
          <div className="pg-editor-body">
            {/* File tree */}
            <div className="pg-filetree">
              {files.map(f => (
                <div
                  key={f.name}
                  className={`pg-file-item${f.name === activeFile ? ' active' : ''}`}
                  onClick={() => switchFile(f.name)}
                >
                  <span className="pg-file-name">{f.name}</span>
                  {files.length > 1 && (
                    <button
                      className="pg-file-delete"
                      onClick={e => { e.stopPropagation(); deleteFile(f.name); }}
                      title="Excluir arquivo"
                    >×</button>
                  )}
                </div>
              ))}

              {showNewFileInput ? (
                <div className="pg-new-file-input">
                  <input
                    autoFocus
                    value={newFileName}
                    onChange={e => setNewFileName(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') createFile();
                      if (e.key === 'Escape') { setShowNewFileInput(false); setNewFileName(''); }
                    }}
                    placeholder="nome.jscripto"
                  />
                </div>
              ) : (
                <button
                  className="pg-new-file-btn"
                  onClick={() => setShowNewFileInput(true)}
                  title="Novo arquivo"
                >
                  + arquivo
                </button>
              )}
            </div>

            {/* CodeMirrorEditor from TutorialKit — gets .jscripto highlight automatically */}
            <div className="pg-codemirror">
              <CodeMirrorEditor
                theme={theme}
                id={activeFile}
                doc={editorDoc}
                onChange={handleEditorChange}
                debounceChange={0}
              />
            </div>
          </div>
        </div>

        {/* Middle: feature table (toggleable) */}
        {showTable && (
          <div className="pg-panel pg-table-panel">
            <div className="pg-panel-header">
              Funcionalidades
              <button className="pg-toggle" onClick={() => setShowTable(false)} title="Ocultar">×</button>
            </div>
            <div className="pg-table-body">
              <p className="pg-table-section">Keywords</p>
              <table className="pg-table">
                <thead><tr><th>JavaScripto</th><th>JavaScript</th></tr></thead>
                <tbody>
                  {KEYWORDS.map(k => (
                    <tr key={k.pt}>
                      <td><code>{k.pt}</code></td>
                      <td><code>{k.js}</code></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="pg-table-section">Métodos</p>
              <table className="pg-table">
                <thead><tr><th>JavaScripto</th><th>JavaScript</th></tr></thead>
                <tbody>
                  {METHODS.map(m => (
                    <tr key={m.pt}>
                      <td><code>{m.pt}</code></td>
                      <td><code>{m.js}</code></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Right: JS output (transpiled, browser-side, with CodeMirrorEditor readonly) */}
        <div className="pg-panel pg-js-panel">
          <div className="pg-panel-header">
            <span className="pg-lang-dot pg-lang-dot-js" />
            JavaScript
            {!showTable && (
              <button className="pg-toggle-show" onClick={() => setShowTable(true)}>
                ≡ funcionalidades
              </button>
            )}
          </div>
          {transpileError ? (
            <pre className="pg-js-error">{transpileError}</pre>
          ) : (
            <div className="pg-codemirror">
              <CodeMirrorEditor
                theme={theme}
                id="js-output"
                doc={{ value: jsOutput, loading: false, filePath: '/output.js' }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom: terminal (WebContainer output via xterm) */}
      <div className="pg-terminal-panel">
        <div className="pg-panel-header">
          <span>Saída</span>
          {statusText && <span className="pg-status">{statusText}</span>}
        </div>
        <div className="pg-terminal-body">
          <Terminal
            ref={terminalRef}
            theme={theme}
            readonly={true}
            onTerminalReady={terminal => { xtermRef.current = terminal; }}
            className="pg-xterm"
          />
        </div>
      </div>
    </div>
  );
}
