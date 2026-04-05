import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

const langModulePath = fileURLToPath(new URL('./src/codemirror-lang-javascripto.js', import.meta.url));

const jscriptoEntry = `
    LanguageDescription.of({
        name: 'JavaScripto',
        extensions: ['jscripto'],
        async load() {
            const { LanguageSupport } = await import('@codemirror/language');
            const { javascriptoLanguage, javascriptoFunctionHighlight } = await import('${langModulePath}');
            return new LanguageSupport(javascriptoLanguage, [javascriptoFunctionHighlight]);
        },
    }),`;

/**
 * Vite plugin that transforms TutorialKit's CodeMirror languages module
 * to add .jscripto support with a custom StreamLanguage tokenizer.
 *
 * Works both in dev (Vite dep pre-bundling) and build (Rollup).
 */
function jscriptoEditorPlugin() {
  return {
    name: 'jscripto-editor-language',
    transform(code: string, id: string) {
      // Match both the original module and Vite's pre-bundled version
      const isOriginal = id.includes('CodeMirrorEditor') && id.endsWith('languages.js');
      const isPreBundled = id.includes('@tutorialkit_react') && code.includes('supportedLanguages');

      if (isOriginal || isPreBundled) {
        return code.replace(
          /((?:export )?(?:const|var) supportedLanguages = \[)/,
          `$1${jscriptoEntry}`
        );
      }
    },
  };
}

export default defineConfig({
  site: 'https://javascripto.ggdaltoso.dev',
  devToolbar: { enabled: false },
  integrations: [
    tutorialkit({
      components: {
        HeadTags: './src/CustomHeadTags.astro',
      },
    }),
  ],
  vite: {
    plugins: [jscriptoEditorPlugin()],
    optimizeDeps: {
      exclude: ['@tutorialkit/react'],
    },
  },
});
