import { useCallback, useEffect, useRef, useState } from 'react';
import type { Theme } from '@tutorialkit/react';
import { transpile } from '@javascripto/transpiler/browser';

import type { WebContainer } from '@webcontainer/api';
import { DEFAULT_CODE } from './constants';
import type { FileEntry } from './constants';
import { getWebContainer } from './webcontainer';
import { JscriptoEditor } from './JscriptoEditor';
import { FileTree } from './FileTree';
import { FeatureTable } from './FeatureTable';
import { JsOutputPanel } from './JsOutputPanel';
import { TerminalPanel } from './TerminalPanel';
import { TemplateSelector } from './TemplateSelector';

// Template files — inlined at build time via Vite's ?raw import
import runJsSrc from '../../templates/default/run.js?raw';
import transpilerSrc from '../../templates/default/transpiler.js?raw';
import semanticsSrc from '../../templates/default/semantics.js?raw';
import ohmSrc from '../../templates/default/javascripto.ohm?raw';
import packageSrc from '../../templates/default/package.json?raw';

export default function Playground() {
  // Theme is read from the html[data-theme] attribute set by TutorialKit
  const [theme, setTheme] = useState<Theme>(() => {
    const t = document.documentElement.getAttribute('data-theme');
    return t === 'light' ? 'light' : 'dark';
  });

  const [files, setFiles] = useState<FileEntry[]>([
    { name: 'programa.jscripto', content: DEFAULT_CODE },
  ]);
  const [activeFile, setActiveFile] = useState('programa.jscripto');
  const [jsOutput, setJsOutput] = useState(() => { try { return transpile(DEFAULT_CODE); } catch { return ''; } });
  const [transpileError, setTranspileError] = useState<string | null>(null);
  const [wcStatus, setWcStatus] = useState<'booting' | 'installing' | 'ready' | 'error'>('booting');
  const [showTable, setShowTable] = useState(true);
  const [fileTreeCollapsed, setFileTreeCollapsed] = useState(false);
  const [mobileTab, setMobileTab] = useState<'editor' | 'output' | 'table'>('editor');

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
          'semantics.js': { file: { contents: semanticsSrc } },
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

  const handleEditorChange = useCallback((content: string) => {
    setFiles(prev => prev.map(f => f.name === activeFile ? { ...f, content } : f));

    try {
      setJsOutput(transpile(content));
      setTranspileError(null);
    } catch (e: unknown) {
      setTranspileError(e instanceof Error ? e.message : String(e));
    }

    if (writeDebounceRef.current) clearTimeout(writeDebounceRef.current);
    writeDebounceRef.current = setTimeout(() => writeToWC(activeFile, content), 150);
  }, [activeFile, writeToWC]);

  // ── File operations ─────────────────────────────────────────────────────────

  const handleSwitchFile = useCallback((name: string) => {
    if (name !== activeFile) setActiveFile(name);
  }, [activeFile]);

  const handleCreateFile = useCallback((name: string) => {
    setFiles(prev => [...prev, { name, content: '' }]);
    setActiveFile(name);
    writeToWC(name, '');
  }, [writeToWC]);

  const handleDeleteFile = useCallback((name: string) => {
    if (files.length === 1) return;
    setFiles(prev => {
      const remaining = prev.filter(f => f.name !== name);
      if (activeFile === name) setActiveFile(remaining[0].name);
      return remaining;
    });
    wcRef.current?.fs.rm(name).catch(() => {});
  }, [files, activeFile]);

  // ── Derived state ───────────────────────────────────────────────────────────

  const activeContent = files.find((f) => f.name === activeFile)?.content ?? '';

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="pg-root" data-mobile-tab={mobileTab}>
      {/* Mobile tab bar — hidden on desktop via CSS */}
      <div className="pg-mobile-tabs">
        <button
          type="button"
          className={`pg-mobile-tab${mobileTab === 'editor' ? ' active' : ''}`}
          onClick={() => setMobileTab('editor')}
        >
          Editor
        </button>
        <button
          type="button"
          className={`pg-mobile-tab${mobileTab === 'output' ? ' active' : ''}`}
          onClick={() => setMobileTab('output')}
        >
          JavaScript
        </button>
        <button
          type="button"
          className={`pg-mobile-tab${mobileTab === 'table' ? ' active' : ''}`}
          onClick={() => setMobileTab('table')}
        >
          Funcionalidades
        </button>
      </div>

      {/* Top row */}
      <div className="pg-top">
        {/* Left: file tree + CodeMirror editor */}
        <div className="pg-panel pg-editor-panel">
          <div className="pg-panel-header">
            <span className="pg-lang-dot" />
            JavaScripto
            <button
              type="button"
              className="pg-filetree-toggle"
              onClick={() => setFileTreeCollapsed(c => !c)}
              title={fileTreeCollapsed ? 'Mostrar arquivos' : 'Ocultar arquivos'}
            >
              {fileTreeCollapsed ? '›' : '‹'}
            </button>
            <TemplateSelector onSelect={(code) => {
              setFiles(prev => prev.map(f => f.name === activeFile ? { ...f, content: code } : f));
              handleEditorChange(code);
            }} />
          </div>
          <div className="pg-editor-body">
            {!fileTreeCollapsed && (
              <FileTree
                files={files}
                activeFile={activeFile}
                onSwitchFile={handleSwitchFile}
                onCreateFile={handleCreateFile}
                onDeleteFile={handleDeleteFile}
              />
            )}
            <div className="pg-codemirror">
              <JscriptoEditor
                theme={theme}
                doc={activeContent}
                onChange={handleEditorChange}
              />
            </div>
          </div>
        </div>

        {/* Middle: feature table (toggleable on desktop, tab on mobile) */}
        {showTable && <FeatureTable onHide={() => setShowTable(false)} />}
        {mobileTab === 'table' && <FeatureTable className="pg-mobile-table-panel" onHide={() => setMobileTab('editor')} />}

        {/* Right: JS output */}
        <JsOutputPanel
          theme={theme}
          jsOutput={jsOutput}
          transpileError={transpileError}
          showTable={showTable}
          onShowTable={() => setShowTable(true)}
        />
      </div>

      {/* Bottom: terminal */}
      <TerminalPanel
        theme={theme}
        wcStatus={wcStatus}
        onTerminalReady={(terminal) => { xtermRef.current = terminal; }}
      />
    </div>
  );
}
