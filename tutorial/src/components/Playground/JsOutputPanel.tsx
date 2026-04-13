import CodeMirrorEditor from '@tutorialkit/react/core/CodeMirrorEditor';
import type { Theme } from '@tutorialkit/react';

function reindent(code: string): string {
  let depth = 0;
  const IND = '  ';
  return code
    .split('\n')
    .map(line => {
      const t = line.trim();
      if (!t) return '';
      if (t.startsWith('}')) depth = Math.max(0, depth - 1);
      // case / default labels sit one level above their body
      if (/^(case\b[^:]*|default):$/.test(t) && depth > 0) {
        depth--;
        const out = IND.repeat(depth) + t;
        depth++;
        return out;
      }
      const out = IND.repeat(depth) + t;
      if (t.endsWith('{')) depth++;
      return out;
    })
    .join('\n');
}

interface JsOutputPanelProps {
  theme: Theme;
  jsOutput: string;
  transpileError: string | null;
  showTable: boolean;
  onShowTable: () => void;
}

export function JsOutputPanel({ theme, jsOutput, transpileError, showTable, onShowTable }: JsOutputPanelProps) {
  return (
    <div className="pg-panel pg-js-panel">
      <div className="pg-panel-header">
        <span className="pg-lang-dot pg-lang-dot-js" />
        JavaScript
        {!showTable && (
          <button type="button" className="pg-toggle-show" onClick={onShowTable}>
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
            doc={{
              value: reindent(jsOutput),
              loading: false,
              filePath: '/output.js',
            }}
          />
        </div>
      )}
    </div>
  );
}
