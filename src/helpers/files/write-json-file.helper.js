const fs = require("fs");

class WriteJSONFileHelper {
  static write(fileName, structue) {
    fs.writeFile(`./tmp/${fileName}.json`, JSON.stringify(structue), () => {});
  }
}

module.exports = WriteJSONFileHelper;
