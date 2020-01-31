const sha1 = require("sha1");

class SHA1Helper {
  static encrypt(message) {
    return sha1(message);
  }
}

module.exports = SHA1Helper;
