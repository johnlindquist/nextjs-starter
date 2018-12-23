import { echo } from '@Util/echo';
import buildUrl from 'build-url';
import { getWindowBaseUrl } from '@Util/url';
import { isServer } from '@Util/cmn';

const fetch = require('isomorphic-unfetch');

// window host
const getQP = (queryParams) => {

  queryParams['__o'] = isServer ? 'server' : 'client';
  queryParams['__t'] = Date.now();
  queryParams['__wh'] = getWindowBaseUrl();
  return queryParams;
};

// todo unit test all cases with API's and error handling
export const FetchJson = async ({ host, path, hash, queryParams = {}, postData, opt = {} }) => {

  if (!host) {
    host = getWindowBaseUrl();
  }

  if (postData) {
    Object.assign(opt, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  const uri = buildUrl(
    host, {
      path: path,
      queryParams: getQP(queryParams)
    }
  );

  echo(uri);

  const res = await fetch(uri, opt);

  const statusCode = res.status >= 200 ? res.status : false;
  let json = null;

  try {
    json = await res.json();
    json = json || {}; // incase of null as nell
  } catch (e) {
    json = {};
    echo(e);
  }

  json.reqStatusCode = statusCode;
  return { json, reqStatusCode: statusCode };
};
