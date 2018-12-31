//
import { isClient } from "./cmn";

export const getQueryByName = (name, url) => {
  if (!isClient) {
    return;
  }

  // if (window && window.__NEXT_DATA__) {
  // return getQueryParamFromNextData(name);
  // }

  if (!url) url = window.location.href;
  name = name.replace(/[[]]/g, "\\$&");
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
    results = regex.exec(url);
  if (!results) return undefined;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const getQueryParamFromNextData = (key, defaultValue) => {
  if (!isClient) {
    return undefined;
  }
  const reqData = window.__NEXT_DATA__.query;
  return reqData[key] || defaultValue;
};

