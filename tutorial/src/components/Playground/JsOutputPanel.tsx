import CodeMirrorEditor from '@tutorialkit/react/core/CodeMirrorEditor';
import type { Theme } from '@tutorialkit/react';

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
          <button className="pg-toggle-show" onClick={onShowTable}>
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
              value: jsOutput,
              loading: false,
              filePath: '/output.js',
            }}
          />
        </div>
      )}
    </div>
  );
}
