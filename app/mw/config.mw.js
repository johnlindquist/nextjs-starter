import { IS_DEV } from './../config';
import { isApiUrl, isInternalUrl } from './../helper/url';

const ssDate = new Date().toJSON();

const getAppConfig = async (req) => {

  return {};
};

const configMw = async (req, res, next) => {
  // set the www url of current website serving the frontend
  //process.env.NODE_SERVER_URL = 'http://localhost:' + process.env.PORT; // todo the frontend url incase of serving from multiple frontends
  // todo cache based on request md5
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
