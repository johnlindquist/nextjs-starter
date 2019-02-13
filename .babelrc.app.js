module.exports =
  {
    babelrc: false,
    presets: ['@babel/preset-env'],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 2
        }
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true
        }
      ],
      '@babel/plugin-proposal-json-strings'
    ],
    ignore: ['node_modules', '.next']
  };
