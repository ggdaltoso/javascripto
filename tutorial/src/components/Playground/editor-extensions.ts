import {
  EditorView,
  keymap,
  lineNumbers,
  drawSelection,
  dropCursor,
  highlightActiveLine,
  highlightActiveLineGutter,
  scrollPastEnd,
} from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { defaultKeymap, historyKeymap, history } from '@codemirror/commands';
import { searchKeymap } from '@codemirror/search';
import {
  acceptCompletion,
  autocompletion,
  closeBrackets,
} from '@codemirror/autocomplete';
import {
  LanguageSupport,
  indentOnInput,
  bracketMatching,
  foldGutter,
  foldService,
  indentUnit,
} from '@codemirror/language';
import {
  javascriptoLanguage,
  javascriptoFunctionHighlight,
  javascriptoCompletion,
} from '../../codemirror-lang-javascripto.js';
import { jscriptoBaseTheme } from './editor-theme.js';
import { indentKeyBinding } from './indent.js';

// foldGutter requires fold ranges — StreamLanguage doesn't provide them via
// foldNodeProp, so we derive them manually by matching braces.
const javascriptoFoldService = foldService.of((state, lineStart) => {
  const line = state.doc.lineAt(lineStart);
  const openIdx = line.text.lastIndexOf('{');
  if (openIdx === -1) return null;

  let depth = 0;
  for (let pos = lineStart + openIdx; pos < state.doc.length; pos++) {
    const ch = state.sliceDoc(pos, pos + 1);
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        if (state.doc.lineAt(pos).from > line.from) {
          return { from: lineStart + openIdx + 1, to: pos };
        }
        return null;
      }
    }
  }
  return null;
});

export const jscriptoExtensions = [
  EditorView.contentAttributes.of({ 'aria-label': 'Editor' }),
  jscriptoBaseTheme,
  new LanguageSupport(javascriptoLanguage, [javascriptoFunctionHighlight]),
  javascriptoCompletion,
  lineNumbers(),
  history(),
  drawSelection(),
  dropCursor(),
  highlightActiveLine(),
  highlightActiveLineGutter(),
  indentOnInput(),
  bracketMatching(),
  closeBrackets(),
  scrollPastEnd(),
  indentUnit.of('\t'),
  EditorState.tabSize.of(2),
  autocompletion({ closeOnBlur: false }),
  keymap.of([
    ...defaultKeymap,
    ...historyKeymap,
    ...searchKeymap,
    { key: 'Tab', run: acceptCompletion },
    indentKeyBinding,
  ]),
  javascriptoFoldService,
  foldGutter({
    markerDOM: (open) => {
      const icon = document.createElement('div');
      icon.className = `fold-icon ${open ? 'i-ph-caret-down-bold' : 'i-ph-caret-right-bold'}`;
      return icon;
    },
  }),
];
