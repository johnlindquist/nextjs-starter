// internal
import { ContainsAny } from "./string";
import { echo } from "./echo";
import { isBrowser } from "./cmn";
import { router } from "@app/routes";
import { getMergedQueryParams } from "./http";
import buildUrl from "build-url";

// return url without query and hash etc..
export const getWindowPathname = (onlyUrl) => {
  if (isBrowser) {
    const url = window.location.pathname;
    return onlyUrl === true ? url.split("?")[0] : url;
  }
  return `${process.env.NODE_SERVER_URL}`;
};

// return url which the application is running on for calling internal ajax
// or return current API URL in SSR to it proxy calls to the api server
export const getWindowBaseUrl = () => {

  if (isBrowser) {
    return `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ""}`;
  }

  if (!isBrowser) {
    // todo get from env
    echo(`${process.env.NODE_SERVER_URL}`);
    return `${process.env.NODE_SERVER_URL}`;
  }

};

// for ga don't fire GA analytics if user click same route without update
export const storeLastPageUrl = (exclude = []) => {
  if (!isBrowser) {
    return;
  }
  const url = getWindowPathname();
  if (exclude.length > 0 && ContainsAny(url, exclude)) {
    return;
  }
  echo(url);

  sessionStorage.setItem("last_page_url", url);
};

export const goToUrl = ({ url, host = "", path = "", queryParams = {}, params = {}, opt = {}, replace = false }) => {

  if (!url) {
    url = buildUrl(
      host, {
        path: path,
        queryParams: getMergedQueryParams(queryParams)
      }
    );
  }
  echo(url);

  if (replace) {
    router.Router.replaceRoute(url, params, opt);
  } else {
    router.Router.pushRoute(url, params, opt);
  }
};
