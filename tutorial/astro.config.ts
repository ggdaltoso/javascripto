import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

const LANGUAGES_ID = '\0codemirror-languages-override';

/**
 * Vite plugin that overrides TutorialKit's CodeMirror languages module
 * to add .jscripto support with a custom StreamLanguage tokenizer.
 */
function jscriptoEditorPlugin() {
  let originalPath = '';

  return {
    name: 'jscripto-editor-language',
    resolveId(id, importer) {
      if (
        id === './languages.js' &&
        importer &&
        importer.includes('@tutorialkit/react') &&
        importer.includes('CodeMirrorEditor')
      ) {
        originalPath = resolve(importer, '..', 'languages.js');
        return LANGUAGES_ID;
      }
    },
    load(id) {
      if (id === LANGUAGES_ID) {
        const originalSource = readFileSync(originalPath, 'utf-8');

        const jscriptoEntry = `
    LanguageDescription.of({
        name: 'JavaScripto',
        extensions: ['jscripto'],
        async load() {
            const { javascriptoLanguage } = await import('/src/codemirror-lang-javascripto.js');
            return new (await import('@codemirror/language')).LanguageSupport(javascriptoLanguage);
        },
    }),`;

        return originalSource.replace(
          /^(export const supportedLanguages = \[)/m,
          `$1${jscriptoEntry}`
        );
      }
    },
  };
}

export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [tutorialkit()],
  vite: {
    plugins: [jscriptoEditorPlugin()],
  },
});
