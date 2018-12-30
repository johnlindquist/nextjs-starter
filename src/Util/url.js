// internal
import { ContainsAny } from "./string";
import { echo } from "./echo";
import { isClient, isServer } from "./cmn";
import { router } from "@app/routes";
import { getMergedQueryParams } from "./http";
import buildUrl from "build-url";

// return url without query and hash etc..
export const getWindowPathname = (onlyUrl) => {
  if (isClient) {
    const url = window.location.pathname;
    return onlyUrl === true ? url.split("?")[0] : url;
  }
  return `${process.env.NODE_SERVER_URL}`;
};

// return url which the application is running on for calling internal ajax
// or return current API URL in SSR to it proxy calls to the api server
export const getWindowBaseUrl = () => {

  if (isClient) {
    return `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ""}`;
  }

  if (isServer) {
    // todo get from env
    echo(`${process.env.NODE_SERVER_URL}`);
    return `${process.env.NODE_SERVER_URL}`;
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

  sessionStorage.setItem("last_page_url", url);
};

// only client side
// todo test
export const getParameterByName = (name, url) => {
  if (!isClient) {
    return;
  }
  if (!url) url = window.location.href;
  name = name.replace(/[[]]/g, "\\$&");
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
    results = regex.exec(url);
  if (!results) return undefined;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export const goToUrl = ({ url, host = "", path = "", queryParams = {}, params = {}, opt = {} }) => {

  if (!url) {
    url = buildUrl(
      host, {
        path: path,
        queryParams: getMergedQueryParams(queryParams)
      }
    );
  }
  echo(url);

  router.Router.pushRoute(url, params, opt);
};
