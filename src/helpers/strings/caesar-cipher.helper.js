/** Helpers */
const { ExceedNumberHelper } = require("../numbers");

class CaesarCipherHelper {
  /*
    This method can be used to encrypt and decrypt a message based on alphabet
  */

  static encryptOrDecrypt(str, shift) {
    if (typeof str !== "string") return "";

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return str
      .toLowerCase()
      .split(" ")
      .map(word =>
        word
          .split("")
          .map(letter => {
            const indexOfLetter = alphabet.indexOf(letter);
            if (indexOfLetter) {
              const limitedNumber = ExceedNumberHelper.exceed(
                indexOfLetter + shift,
                { max: alphabet.length }
              );
              return alphabet[limitedNumber];
            }
            return letter;
          })
          .join("")
      )
      .join(" ");
  }
}

module.exports = CaesarCipherHelper;
