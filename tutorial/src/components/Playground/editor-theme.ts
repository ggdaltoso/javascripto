import { EditorView } from '@codemirror/view';
import { Compartment } from '@codemirror/state';
import {
  defaultHighlightStyle,
  HighlightStyle,
  syntaxHighlighting,
} from '@codemirror/language';
import { tags } from '@lezer/highlight';
import type { Theme } from '@tutorialkit/react';

export const vscodeDarkHighlight = HighlightStyle.define([
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
  { tag: [tags.regexp], color: '#d16969' },
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

export const jscriptoBaseTheme = EditorView.theme({
  '&.cm-editor': {
    height: '100%',
    background: 'var(--cm-backgroundColor)',
    color: 'var(--cm-textColor)',
  },
  '.cm-scroller': { lineHeight: '1.5' },
  '.cm-line': { padding: '0 0 0 4px' },
  '.cm-gutters': {
    background: 'var(--cm-gutter-backgroundColor)',
    borderRight: '0',
    color: 'var(--cm-gutter-textColor)',
  },
  '.cm-activeLine': { background: 'var(--cm-activeLineBackgroundColor)' },
  '.cm-cursor': {
    borderLeft: 'var(--cm-cursor-width) solid var(--cm-cursor-backgroundColor)',
  },
  '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': {
    backgroundColor: 'var(--cm-selection-backgroundColorFocused)',
    opacity: 'var(--cm-selection-backgroundOpacityFocused, 0.3)',
  },
});

export function getEditorTheme() {
  return EditorView.theme({
    '.cm-gutters': {
      background: 'var(--cm-gutter-backgroundColor)',
      borderRight: '0',
      color: 'var(--cm-gutter-textColor)',
    },
    '.cm-gutter': {
      '&.cm-lineNumbers': {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '13px',
        minWidth: '28px',
      },
      '& .cm-activeLineGutter': {
        background: 'transparent',
        color: 'var(--cm-gutter-activeLineTextColor)',
      },
      '&.cm-foldGutter .cm-gutterElement > .fold-icon': {
        cursor: 'pointer',
        color: 'var(--cm-foldGutter-textColor)',
        transform: 'translateY(2px)',
        '&:hover': {
          color: 'var(--cm-foldGutter-textColorHover)',
        },
      },
    },
    '.cm-foldGutter .cm-gutterElement': {
      padding: '0 4px',
    },
  });
}

export const jscriptoHighlightCompartment = new Compartment();

function getLightTheme() {
  return syntaxHighlighting(defaultHighlightStyle);
}

function getDarkTheme() {
  return syntaxHighlighting(vscodeDarkHighlight);
}

export function jscriptoHighlightFor(theme: Theme) {
  return [
    getEditorTheme(),
    theme === 'dark'
      ? [EditorView.theme({}, { dark: true }), getDarkTheme()]
      : [getLightTheme()],
  ];
}
