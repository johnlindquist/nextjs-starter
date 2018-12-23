import { isApiUrl, isInternalUrl } from './../helper/url';

const statsMw = async (req, res, next) => {
  // set the www url of current website serving the frontend
  if (isInternalUrl(req.url) || isApiUrl(req.url)) {
    next();
    return;
  }

  res.json({
    headers: req.headers,
    env: process.env,
    // cpu: os.cpus(),
    // totalMem: os.totalmem(),
    // freeMem: os.freemem()
  });

};

export { statsMw };
