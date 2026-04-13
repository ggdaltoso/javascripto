import { useRef } from 'react';
import { Terminal } from '@tutorialkit/react/core/Terminal';
import type { TerminalRef } from '@tutorialkit/react/core/Terminal';
import type { Theme } from '@tutorialkit/react';

interface TerminalPanelProps {
  theme: Theme;
  statusText: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onTerminalReady: (terminal: any) => void;
}

export function TerminalPanel({ theme, statusText, onTerminalReady }: TerminalPanelProps) {
  const terminalRef = useRef<TerminalRef>(null);

  return (
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
          onTerminalReady={onTerminalReady}
          className="pg-xterm"
        />
      </div>
    </div>
  );
}
