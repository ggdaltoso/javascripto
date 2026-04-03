import { readFileSync } from 'node:fs';

const grammarJson = JSON.parse(
  readFileSync(new URL('./javascripto.tmLanguage.json', import.meta.url), 'utf-8')
);

export default {
  shiki: {
    langs: [grammarJson],
  },
};
