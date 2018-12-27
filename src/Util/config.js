//
import { isClient } from "./cmn";

export const getAppConfig = (key, defaultValue) => {
  if (!isClient) {
    return undefined;
  }
  const appConfig = window.__NEXT_DATA__.props.appConfig || defaultValue;
  return appConfig[key];
};

