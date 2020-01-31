/** Helpers */
const { LimitNumberHelper } = require("../numbers");

class CaesarCipherHelper {
  constructor() {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    this.limits = { min: 0, max: this.alphabet.length };
  }

  static decrypt(str, shift) {
    if (typeof str !== "string") return "";
    return str
      .toLowerCase()
      .split("")
      .map(letter => {
        const indexOfLetter = this.alphabet.indexOf(letter);
        const limitedNumber = LimitNumberHelper.limit(
          indexOfLetter + shift,
          this.limits
        );
      });
  }
}

module.exports = CaesarCipherHelper;
