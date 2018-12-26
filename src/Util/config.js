//
import { isClient } from "./cmn";

export const getAppConfig = (key) => {
  if (!isClient) {
    return undefined;
  }
  const appConfig = window.__NEXT_DATA__.props.appConfig || {};
  return appConfig[key];
};

