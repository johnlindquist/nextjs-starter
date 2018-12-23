import proxy from 'http-proxy-middleware';
import { API_URL } from './../config';

// create the proxy (without context)
const apiProxyMw = proxy({
  target: API_URL,
  changeOrigin: true,
  secure: false,
  xfwd: true,
  followRedirects: true,
  onProxyReq: (proxyReq, req) => {
    proxyReq.setHeader('x-forwarded-real-ip', req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || '');
    // proxyReq.setHeader('x-forwarded-referrer', req.headers.referrer || req.headers.referer || '');
  }
});

export { apiProxyMw };
