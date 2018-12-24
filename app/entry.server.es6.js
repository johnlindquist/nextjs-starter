import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import next from 'next';
import http from 'http';
import path from 'path';

import { getRequestHandler } from './routes';
import { parse } from 'url';
import { configMw } from './mw/config.mw';
import { apiProxyMw } from './mw/api.proxy.mw';
import { API_URL, PORT } from './config';
import { userMw } from './mw/user.mw';
import { statsMw } from './mw/stats.mw';
import { miscMw } from './mw/misc.mw';


const nextApp = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = getRequestHandler(nextApp);

const app = express();
// app.set('trust proxy', '127.0.0.1');
app.disable('x-powered-by');
app.use(cookieParser());
app.use(compression());

app.use(miscMw);

// fetch config
app.use(userMw);

// fetch config
app.use(configMw);

app.use('/app/stats', statsMw);

// routes
app.use('/api', apiProxyMw);


app.get('/service-worker.js', (req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname } = parsedUrl;
  const filePath = path.join(__dirname, 'dist', pathname);
  return nextApp.serveStatic(req, res, filePath);
});

app.get('*.*', express.static(path.join(__dirname, '.', 'static')));

// Force trailing slash on language subpaths
app.get('*', (req, res) => handle(req, res));

nextApp
  .prepare()
  .then(() => {
    const server = http.createServer(app);

    server.listen(PORT, (err) => {
      if (err) throw err;
      process.env.NODE_SERVER_URL = ` http://localhost:${ PORT }`;
      console.log(`> Ready on http://localhost:${ PORT }`);
      console.log(`> API_URL: ${ API_URL }`);
    });
  });

