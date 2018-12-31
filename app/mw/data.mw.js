import { isApiUrl, isInternalUrl } from "./../helper/url";


const dataMw = async (req, res, next) => {

  if (isInternalUrl(req.url) || isApiUrl(req.url)) {
    next();
    return;
  }
  // data mw
  req.appData = {};

  next();
};

export { dataMw };
