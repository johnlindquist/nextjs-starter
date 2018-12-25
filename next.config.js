const isProd = process.env.NODE_ENV === 'production';
const isLive = process.env.NODE_LIVE === 'live';
let withBundleAnalyzer;

if (!isLive) {
  withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
}

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');

let opts = {
  useFileSystemPublicRoutes: false,
  poweredByHeader: false,
  // analyzer @ https://github.com/zeit/next-plugins/tree/master/packages/next-bundle-analyzer
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../../static/.analyze/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../static/.analyze/client.html'
    }
  }
};

// build
opts.distDir = 'dist';


// css @ https://github.com/zeit/next-plugins/tree/master/packages/next-css
opts.cssModules = false;
opts.cssLoaderOptions = {
  importLoaders: 1,
  localIdentName: '[local]___[hash:base64:5]',
  minimize: true,
  modules: false,
};

// @ https://github.com/hanford/next-offline
// opts.dontAutoRegisterSw = true;
opts.workboxOpts = {
  clientsClaim: true,
  skipWaiting: true,
  // modifyUrlPrefix: {
  // 'dist': '/_next',
  // },
  globDirectory: '.',
  globPatterns: ['static/favs/manifest.json', 'static/favs/favicon*', 'static/favs/coast*', 'static/commons/*'],
  globIgnores: ['static/robots.txt'],
  // offlineGoogleAnalytics: true,
  runtimeCaching: [
    {
      urlPattern: '/',
      handler: 'networkFirst',
      options: {
        cacheName: 'html-cache',
      },
    },
    {
      urlPattern: '"/?homescreen=1"',
      handler: 'staleWhileRevalidate',
      options: {
        cacheName: 'start-url-cache',
      },
    },
    {
      urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'images-cache',
      }
    },
    {
      urlPattern: /\.(?:js|css)$/,
      handler: 'staleWhileRevalidate',
      options: {
        cacheName: 'static-resources',
      }
    },
    {
      urlPattern: /.*(?:googleapis)\.com.*$/,
      handler: 'staleWhileRevalidate',
      options: {
        cacheName: 'googleapis-cache',
      }
    },
    {
      urlPattern: /.*(?:gstatic)\.com.*$/,
      handler: 'staleWhileRevalidate',
      options: {
        cacheName: 'gstatic-cache',
      }
    },
    {
      urlPattern: /api\/.*(auth|signup|login).*/,
      handler: 'networkOnly',
    },
    {
      urlPattern: /api/,
      handler: 'networkFirst',
      options: {
        cacheName: 'api-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 5 * 60, // 5 minutes
        },
        cacheableResponse: {
          statuses: [0, 200, 404],
          headers: {
            'X-Is-Cacheable': 'true',
          }
        },
        fetchOptions: {
          mode: 'no-cors',
        },
      }
    }
  ]
};

opts.generateEtags = false;
opts.onDemandEntries = {
  // period (in ms) where the server will keep pages in the buffer
  maxInactiveAge: 25 * 1000 * 1000,
  // number of pages that should be kept simultaneously without being disposed
  pagesBufferLength: 50,
};

opts.serverRuntimeConfig = { // Will only be available on the server side
  mySecret: 'secret'
};

opts.publicRuntimeConfig = { // Will be available on both server and client
  staticFolder: '/static',
  nodeEnv: process.env.NODE_ENV, // Pass through env variables
};

// You may only need to add assetPrefix in the production.
opts.assetPrefix = isProd ? '' : '';

opts.webpack = (webpackConfig) => {
  // Fixes npm packages that depend on `fs` module
  webpackConfig.node = {
    fs: 'empty'
  };

  return webpackConfig;
};


// HOC
let exportsObj = withOffline(opts);
exportsObj = withCSS(exportsObj);
exportsObj = withSass(exportsObj);

if (!isLive) {
  exportsObj = withBundleAnalyzer(exportsObj);
}

module.exports = exportsObj;
