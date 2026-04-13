import { useEffect, useRef } from 'react';
import type { Theme } from '@tutorialkit/react';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import {
  jscriptoHighlightCompartment,
  jscriptoHighlightFor,
} from './editor-theme.js';
import { jscriptoExtensions } from './editor-extensions.js';

export interface JscriptoEditorProps {
  theme: Theme;
  doc: string;
  onChange?: (value: string) => void;
}

export function JscriptoEditor({ theme, doc, onChange }: JscriptoEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    if (!containerRef.current) return;
    const view = new EditorView({
      state: EditorState.create({
        doc,
        extensions: [
          ...jscriptoExtensions,
          jscriptoHighlightCompartment.of(jscriptoHighlightFor(theme)),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) onChangeRef.current?.(update.state.doc.toString());
          }),
        ],
      }),
      parent: containerRef.current,
    });
    viewRef.current = view;
    return () => {
      view.destroy();
      viewRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    viewRef.current?.dispatch({
      effects: jscriptoHighlightCompartment.reconfigure(jscriptoHighlightFor(theme)),
    });
  }, [theme]);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const current = view.state.doc.toString();
    if (current !== doc) {
      view.dispatch({ changes: { from: 0, to: current.length, insert: doc } });
    }
  }, [doc]);

  return <div ref={containerRef} style={{ height: '100%' }} />;
}
