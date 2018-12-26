const internalPrefixes = [/^\/_next\//, /^\/static\//];
export const isInternalUrl = (url) => {
  for (let _i = 0; _i < internalPrefixes.length; _i++) {
    const prefix = internalPrefixes[_i];

    if (prefix.test(url)) {
      return true;
    }
  }

  return false;
};

export const isApiUrl = (url) => url.startsWith("/api") || url.startsWith("/service-worker.js");
