import { IS_DEV } from "./../config";
import { isApiUrl, isInternalUrl } from "./../helper/url";

const serverStartDate = new Date().toJSON();

const getAppConfig = async () => {

  return { serverTime: new Date().toJSON() };
};

// ssr state rendering example 
const configMw = async (req, res, next) => {
  if (isInternalUrl(req.url) || isApiUrl(req.url)) {
    next();
    return;
  }

  req.ssDate = serverStartDate;
  // to implement
  req.appConfig = await getAppConfig(req);
  req.appConfig.isDev = IS_DEV;

  next();
};

export { configMw };
