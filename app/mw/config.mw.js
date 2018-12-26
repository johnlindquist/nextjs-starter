import { IS_DEV } from "./../config";
import { isApiUrl, isInternalUrl } from "./../helper/url";

const ssDate = new Date().toJSON();

const getAppConfig = async (req) => {

  return {};
};

const configMw = async (req, res, next) => {
  if (isInternalUrl(req.url) || isApiUrl(req.url)) {
    next();
    return;
  }

  req.ssDate = ssDate;
  // to implement
  req.appConfig = await getAppConfig(req);
  req.appConfig.isDev = IS_DEV;

  next();
};

export { configMw };
