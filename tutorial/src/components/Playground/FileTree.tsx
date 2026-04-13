import { useState } from 'react';
import type { FileEntry } from './constants';

interface FileTreeProps {
  files: FileEntry[];
  activeFile: string;
  onSwitchFile: (name: string) => void;
  onCreateFile: (name: string) => void;
  onDeleteFile: (name: string) => void;
}

export function FileTree({ files, activeFile, onSwitchFile, onCreateFile, onDeleteFile }: FileTreeProps) {
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  const [newFileName, setNewFileName] = useState('');

  function handleCreate() {
    let name = newFileName.trim();
    if (!name) return;
    if (!name.endsWith('.jscripto')) name += '.jscripto';
    if (files.some(f => f.name === name)) return;
    onCreateFile(name);
    setNewFileName('');
    setShowNewFileInput(false);
  }

  return (
    <div className="pg-filetree">
      {files.map((f) => (
        <div
          key={f.name}
          className={`pg-file-item${f.name === activeFile ? ' active' : ''}`}
          onClick={() => onSwitchFile(f.name)}
        >
          <span className="pg-file-name">{f.name}</span>
          {files.length > 1 && (
            <button
              className="pg-file-delete"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteFile(f.name);
              }}
              title="Excluir arquivo"
            >
              ×
            </button>
          )}
        </div>
      ))}

      {showNewFileInput ? (
        <div className="pg-new-file-input">
          <input
            autoFocus
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCreate();
              if (e.key === 'Escape') {
                setShowNewFileInput(false);
                setNewFileName('');
              }
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
  );
}
