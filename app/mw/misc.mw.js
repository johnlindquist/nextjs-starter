import { isApiUrl, isInternalUrl } from "./../helper/url";


const miscMw = async (req, res, next) => {

  if (isInternalUrl(req.url) || isApiUrl(req.url)) {
    next();
    return;
  }
  // misc mw
  next();
};

export { miscMw };
