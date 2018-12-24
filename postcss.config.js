let pluginArr = [];
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

let purgeCssPaths = [];
['pages', 'src', 'components', 'services', 'layout', 'lib', 'screen'].map((i) => {
  purgeCssPaths = purgeCssPaths.concat([`${ i }/**/*.js`, `${ i }/**/*.jsx`, `${ i }/**/*.html`, `${ i }/**/*.ts`, `${ i }/**/*.tsx`]);
});

class TailwindExtractor {
  static extract(content) {
    let r = content.match(/[A-z0-9-:/]+/g);
    if (r === null) {
      return [];
    }
    return r;
  }
}

if (process.env.NODE_ENV === 'production') {
  pluginArr = [
    tailwindcss('./tailwind.config.js'),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      whitelistPatterns: [/^fa-/],
      whitelistPatternsChildren: [/^markdown-body/],
      content: purgeCssPaths,
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['js', 'jsx', 'html'],
        }
      ],
    }),
    autoprefixer({ browsers: 'last 2 versions' }),
  ];
}

module.exports = {
  plugins: pluginArr
};
