const fs = require("fs");
const util = require("util");

class ReadFileHelper {
  static async read(path) {
    const readFile = util.promisify(fs.readFile);
    const file = await readFile(path);
    return file;
  }
}

module.exports = ReadFileHelper;
