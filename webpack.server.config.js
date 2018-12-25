// const path = require('path');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const commonModule = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],
};

module.exports = {
  mode: 'production',
  // externals: [/(node_modules|main\..*\.js)/],
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  entry: {
    // This is our Express server for Dynamic universal
    "next.server": path.resolve(__dirname, 'app/next.server.es6.js'),
  },
  resolve: { extensions: ['html', '.js', '.ts', 'jsx', 'css'] },
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(__dirname),
    filename: '[name].build.js',
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {},
    )
  ],
  module: commonModule,
  devtool: false,
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    fs: true,
    __filename: false,
    __dirname: false,
  },
  watch: false,
  watchOptions: {
    poll: 2000, // Check for changes every second
    aggregateTimeout: 700,
    ignored: ['files/**/*.js', 'node_modules']
  },
};
