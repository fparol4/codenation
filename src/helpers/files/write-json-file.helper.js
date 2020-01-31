const fs = require("fs");
const utils = require("util");

class WriteJSONFileHelper {
  static write(fileName, structue) {
    const writeFile = utils.promisify(fs.writeFile);
    return writeFile(
      `./tmp/${fileName}.json`,
      JSON.stringify(structue),
      () => {}
    );
  }
}

module.exports = WriteJSONFileHelper;
