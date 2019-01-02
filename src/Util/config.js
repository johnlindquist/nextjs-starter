//
import { isBrowser } from "./cmn";

export const getAppConfig = (key, defaultValue) => {
  if (!isBrowser) {
    return undefined;
  }
  const appConfig = window.__NEXT_DATA__.props.appConfig;
  return appConfig[key] || defaultValue;
};

