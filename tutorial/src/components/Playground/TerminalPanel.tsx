import { useRef } from 'react';
import { Terminal } from '@tutorialkit/react/core/Terminal';
import type { TerminalRef } from '@tutorialkit/react/core/Terminal';
import type { Theme } from '@tutorialkit/react';
import { BootScreen } from './BootScreen';

type WcStatus = 'booting' | 'installing' | 'ready' | 'error';

interface TerminalPanelProps {
  theme: Theme;
  wcStatus: WcStatus;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onTerminalReady: (terminal: any) => void;
}

export function TerminalPanel({ theme, wcStatus, onTerminalReady }: TerminalPanelProps) {
  const terminalRef = useRef<TerminalRef>(null);

  return (
    <div className="pg-terminal-panel">
      <div className="pg-panel-header">
        <span>Saída</span>
        {wcStatus === 'error' && (
          <span className="pg-status text-tk-elements-status-negative-textColor">
            Erro ao inicializar o WebContainer.
          </span>
        )}
      </div>
      <div className="pg-terminal-body">
        {wcStatus !== 'ready' && <BootScreen wcStatus={wcStatus} />}
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
