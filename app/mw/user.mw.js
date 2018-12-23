import fetch from 'isomorphic-unfetch';
import { API_URL } from './../config';
import { isApiUrl, isInternalUrl } from './../helper/url';


const getAppUser = async (req) => {
  let rs = {};

  const tokenKwt = req.cookies.tokenJwt;
  if (!tokenKwt) {
    return rs;
  }

  await fetch(`${ API_URL }/api/auth/identity/token?hostname=${ req.hostname }`, {
    method: 'POST',
    body: JSON.stringify({ tokenJwt: tokenKwt }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(r => r.json())
    .then(data => {
      rs = data;
    })
    .catch(e => {
    });
  return rs;
};

const userMw = async (req, res, next) => {
  // set the www url of current website serving the frontend
  if (isInternalUrl(req.url) || isApiUrl(req.url)) {
    next();
    return;
  }

  req.appUser = await getAppUser(req);

  next();
};

export { userMw };
