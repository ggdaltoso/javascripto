import { useEffect, useRef } from 'react';
import type { Theme } from '@tutorialkit/react';
import {
  EditorView,
  keymap,
  lineNumbers,
  drawSelection,
  highlightActiveLine,
} from '@codemirror/view';
import { EditorState, Compartment } from '@codemirror/state';
import { defaultKeymap, historyKeymap, history } from '@codemirror/commands';
import {
  LanguageSupport,
  syntaxHighlighting,
  defaultHighlightStyle,
  indentOnInput,
  bracketMatching,
  HighlightStyle,
} from '@codemirror/language';
import { tags } from '@lezer/highlight';
import {
  javascriptoLanguage,
  javascriptoFunctionHighlight,
} from '../../codemirror-lang-javascripto.js';

const vscodeDarkHighlight = HighlightStyle.define([
  {
    tag: [
      tags.keyword,
      tags.operatorKeyword,
      tags.modifier,
      tags.color,
      tags.constant(tags.name),
      tags.standard(tags.name),
      tags.standard(tags.tagName),
      tags.special(tags.brace),
      tags.atom,
      tags.bool,
      tags.special(tags.variableName),
    ],
    color: '#569cd6',
  },
  {
    tag: [tags.controlKeyword, tags.moduleKeyword],
    color: '#c586c0',
  },
  {
    tag: [
      tags.name,
      tags.deleted,
      tags.character,
      tags.macroName,
      tags.propertyName,
      tags.variableName,
      tags.labelName,
      tags.definition(tags.name),
    ],
    color: '#9cdcfe',
  },
  { tag: tags.heading, fontWeight: 'bold', color: '#9cdcfe' },
  {
    tag: [
      tags.typeName,
      tags.className,
      tags.tagName,
      tags.number,
      tags.changed,
      tags.annotation,
      tags.self,
      tags.namespace,
    ],
    color: '#4ec9b0',
  },
  {
    tag: [tags.function(tags.variableName), tags.function(tags.propertyName)],
    color: '#dcdcaa',
  },
  { tag: [tags.number], color: '#b5cea8' },
  {
    tag: [
      tags.operator,
      tags.punctuation,
      tags.separator,
      tags.url,
      tags.escape,
      tags.regexp,
    ],
    color: '#d4d4d4',
  },
  {
    tag: [tags.regexp],
    color: '#d16969',
  },
  {
    tag: [
      tags.special(tags.string),
      tags.processingInstruction,
      tags.string,
      tags.inserted,
    ],
    color: '#ce9178',
  },
  { tag: [tags.angleBracket], color: '#808080' },
  { tag: tags.strong, fontWeight: 'bold' },
  { tag: tags.emphasis, fontStyle: 'italic' },
  { tag: tags.strikethrough, textDecoration: 'line-through' },
  { tag: [tags.meta, tags.comment], color: '#6a9955' },
  { tag: tags.link, color: '#6a9955', textDecoration: 'underline' },
  { tag: tags.invalid, color: '#ff0000' },
]);

const jscriptoBaseTheme = EditorView.theme({
  '&.cm-editor': { height: '100%', background: 'var(--cm-backgroundColor)', color: 'var(--cm-textColor)' },
  '.cm-scroller': { lineHeight: '1.5' },
  '.cm-line': { padding: '0 0 0 4px' },
  '.cm-gutters': { background: 'var(--cm-gutter-backgroundColor)', borderRight: '0', color: 'var(--cm-gutter-textColor)' },
  '.cm-activeLine': { background: 'var(--cm-activeLineBackgroundColor)' },
  '.cm-cursor': { borderLeft: 'var(--cm-cursor-width) solid var(--cm-cursor-backgroundColor)' },
  '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': {
    backgroundColor: 'var(--cm-selection-backgroundColorFocused)',
    opacity: 'var(--cm-selection-backgroundOpacityFocused, 0.3)',
  },
});

const jscriptoHighlightCompartment = new Compartment();

function getLightTheme() {
  return syntaxHighlighting(defaultHighlightStyle);
}

function getDarkTheme() {
  return syntaxHighlighting(vscodeDarkHighlight);
}

function jscriptoHighlightFor(theme: Theme) {
  return theme === 'dark'
    ? [EditorView.theme({}, { dark: true }), getDarkTheme()]
    : [getLightTheme()];
}

const jscriptoExtensions = [
  jscriptoBaseTheme,
  new LanguageSupport(javascriptoLanguage, [javascriptoFunctionHighlight]),
  lineNumbers(),
  history(),
  drawSelection(),
  highlightActiveLine(),
  indentOnInput(),
  bracketMatching(),
  keymap.of([...defaultKeymap, ...historyKeymap]),
];

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
          EditorView.updateListener.of(update => {
            if (update.docChanged) onChangeRef.current?.(update.state.doc.toString());
          }),
        ],
      }),
      parent: containerRef.current,
    });
    viewRef.current = view;
    return () => { view.destroy(); viewRef.current = null; };
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
