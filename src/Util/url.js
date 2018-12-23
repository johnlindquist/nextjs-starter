// internal
import { router } from 'app/routes';
import { ContainsAny } from './string';
import { echo } from './echo';
import { isClient, isServer } from './cmn';

// return url without query and hash etc..
export const getWindowPathname = (onlyUrl) => {
  if (isClient) {
    const url = window.location.pathname;
    return onlyUrl === true ? url.split('?')[0] : url;
  }
  return `${ process.env.NODE_SERVER_URL }`;
};

// return url without query and hash etc..
export const getWindowUrl = (onlyUrl) => {
  if (isClient) {
    const url = window.location.href;
    return onlyUrl === true ? url.split('?')[0] : url;
  }
  return `${ process.env.NODE_SERVER_URL }`;
};

// return url which the application is running on for calling internal ajax
// or return current API URL in SSR to it proxy calls to the api server
export const getWindowBaseUrl = () => {

  if (isClient) {
    return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }

  if (isServer) {
    // todo get from env
    echo(`${ process.env.NODE_SERVER_URL }`);
    return `${ process.env.NODE_SERVER_URL }`;
  }

};

// for ga don't fire GA analytics if user click same route without update
export const storeLastPageUrl = (exclude = []) => {
  if (!isClient) {
    return;
  }
  const url = getWindowPathname();
  if (exclude.length > 0 && ContainsAny(url, exclude)) {
    return;
  }
  echo(url);

  sessionStorage.setItem('last_page_url', url);
};


// for redirect after login
export const storeLastVisitedUrl = (exclude = ['/auth', '/signup', '/login', '/forgot-password', '/reset-password']) => {
  if (!isClient) {
    return;
  }
  const url = getWindowUrl();
  if (ContainsAny(url, exclude)) {
    return;
  }
  echo(url);

  sessionStorage.setItem('last_url', url);
};

// for redirect after login
export const goToLastVisitedUrl = () => {
  if (!isClient) {
    return;
  }
  let url = sessionStorage.getItem('last_url');

  if (url === window.location.href) {
    return;
  }

  echo(url);

  if (!url) {
    url = '/';
  }
  goToUrl(url);
};

export const goToUrl = (url, params = {}, opt = {}) => {
  router.Router.pushRoute(url, params, opt);
};


export const upsertQueryParam = (uri, key, value) => {
  // todo test
  let hash = uri.split('#')[1] || '';
  if (hash) {
    hash = '#' + hash;
  }
  uri = uri.split('#')[0];
  const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  const separator = uri.indexOf('?') !== -1 ? '&' : '?';
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + '=' + value + '$2') + hash;
  } else {
    return uri + separator + key + '=' + value + hash;
  }
};

// only client side
// todo test
export const getParameterByName = (name, url) => {
  if (!isClient) {
    return;
  }
  if (!url) url = window.location.href;
  name = name.replace(/[[]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return undefined;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
