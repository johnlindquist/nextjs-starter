//
import { isClient } from "./cmn";

export const getAppData = (key, defaultValue) => {
  if (!isClient) {
    return undefined;
  }
  const appData = window.__NEXT_DATA__.props.appData;
  return appData[key] || defaultValue;
};

