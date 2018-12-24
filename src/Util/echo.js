import { getAppConfig } from './config';

export const echo = (...params) => {

  const isDev = getAppConfig('isDev');

  if (isDev) {
    let callerName = '';
    try {
      throw new Error();
    } catch (e) {
      let m;
      const re = /(\w+)@|at (\w+) \(/g;
      const st = e.stack;
      re.exec(st);
      m = re.exec(st);
      if (m === null) {
        m = { 1: 'null' };
      }
      callerName = m[1] || m[2];
    }
    console.log(callerName, ...params);
  } else {
    // log only if cookie exist
    if (typeof document !== 'undefined' && document.cookie.indexOf('__echo=') > -1) {
      console.log(...params);
    }
  }


};

