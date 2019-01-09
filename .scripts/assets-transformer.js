// used by jest config file
// https://www.bountysource.com/issues/41190983-syntax-error-invalid-or-unexpected-token-with-png
const path = require("path");

module.exports = {
  process(src, filename, config, options) {
    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
  }
};
