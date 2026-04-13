import tutorialkit from '@tutorialkit/astro';
import type { AstroIntegration } from 'astro';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

const langModulePath = fileURLToPath(new URL('./src/codemirror-lang-javascripto.js', import.meta.url));

const jscriptoEntry = `
    LanguageDescription.of({
        name: 'JavaScripto',
        extensions: ['jscripto'],
        async load() {
            const { LanguageSupport } = await import('@codemirror/language');
            const { javascriptoLanguage, javascriptoFunctionHighlight, javascriptoCompletion } = await import('${langModulePath}');
            return new LanguageSupport(javascriptoLanguage, [javascriptoFunctionHighlight, javascriptoCompletion]);
        },
    }),`;

/**
 * Astro integration that injects the tutorial pages at /tutorial/[...slug]
 * using TutorialKit's exported page entrypoints.
 */
function tutorialRoutesIntegration(): AstroIntegration {
  return {
    name: 'javascripto-tutorial-routes',
    hooks: {
      'astro:config:setup'({ injectRoute }) {
        injectRoute({
          pattern: '/tutorial/[...slug]',
          entrypoint: '@tutorialkit/astro/default/pages/[...slug].astro',
          prerender: true,
        });
      },
    },
  };
}

/**
 * Vite plugin that patches TutorialKit's generateNavigationList call to use
 * '/tutorial' as the base path, so all nav links point to /tutorial/...
 */
function tutorialNavBasePlugin() {
  return {
    name: 'tutorialkit-nav-base',
    enforce: 'pre' as const,
    transform(code: string, id: string) {
      if (id.includes('@tutorialkit') && id.includes('utils/routes') && code.includes('generateNavigationList')) {
        return code.replace(
          'generateNavigationList(tutorial, import.meta.env.BASE_URL)',
          "generateNavigationList(tutorial, '/tutorial')",
        );
      }
    },
  };
}

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
      defaultRoutes: false,
      components: {
        TopBar: '@tutorialkit/astro/default/components/TopBar.astro',
        HeadTags: './src/CustomHeadTags.astro',
      },
    }),
    tutorialRoutesIntegration(),
  ],
  vite: {
    plugins: [tutorialNavBasePlugin(), jscriptoEditorPlugin()],
    optimizeDeps: {
      exclude: ['@tutorialkit/react'],
      include: [
        '@tutorialkit/react > @xterm/xterm',
        '@tutorialkit/react > @xterm/addon-fit',
        '@tutorialkit/react > @xterm/addon-web-links',
        '@codemirror/autocomplete',
      ],
    },
  },
});
