// used by jest config file
// https://www.bountysource.com/issues/41190983-syntax-error-invalid-or-unexpected-token-with-png
const path = require("path");
// jest assets transformer
module.exports = {
  process(src, filename) {
    return `module.exports = ${  JSON.stringify(path.basename(filename))  };`;
  }
};
