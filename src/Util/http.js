import buildUrl from "build-url";
import { getWindowBaseUrl } from "./url";
import { isServer } from "./cmn";
import { echo } from "./echo";

const fetch = require("isomorphic-unfetch");

// window host
const getQP = (queryParams) => {

  queryParams["__o"] = isServer ? "server" : "client";
  queryParams["__t"] = Date.now();
  queryParams["__wh"] = getWindowBaseUrl();
  return queryParams;
};

const doFetch = async ({ url, opt }) => {

  echo(url);
  const response = await fetch(url, opt);
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.indexOf("application/json") !== -1;
  const isText = !isJson;
  let json = null;

  if (isJson) {
    try {
      json = await response.json();
      json = json || {}; // incase of null as nell
    } catch (e) {
      json = {};
      echo(e);
    }
  }

  if (isText) {
    try {
      const text = await response.text();
      json = { text }; // incase of null as nell
    } catch (e) {
      json = {};
      echo(e);
    }
  }

  const statusCode = response.status >= 200 ? response.status : false;
  json.reqStatusCode = statusCode;
  return { json, reqStatusCode: statusCode };

};

// todo unit test all cases with API's and error handling
export const httpPost = async ({ url, host, path, queryParams = {}, opt = {}, postData = {} }) => {

  if (!host) {
    host = getWindowBaseUrl();
  }

  Object.assign(opt, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!url) {
    url = buildUrl(
      host, {
        path: path,
        queryParams: getQP(queryParams)
      }
    );
  }

  return doFetch({ url, opt });
};

export const httpGet = async ({ url, host, path, queryParams = {}, opt = {} }) => {

  if (!host) {
    host = getWindowBaseUrl();
  }

  if (!url) {
    url = buildUrl(
      host, {
        path: path,
        queryParams: getQP(queryParams)
      }
    );
  }
  
  return doFetch({ url, opt });
};
