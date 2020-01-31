/** Helpers */
const { ExceedNumberHelper } = require("../numbers");

class CaesarCipherHelper {
  /*
    This method can be used to encrypt and decrypt a message based on alphabet
  */

  static encryptOrDecrypt(str, shift = 0) {
    if (typeof str !== "string") return "";

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return str
      .toLowerCase()
      .split(" ")
      .map(word => {
        return word
          .split("")
          .map(letter => {
            const letterIndex = alphabet.indexOf(letter);
            if (letterIndex !== -1) {
              const exceededNumber = ExceedNumberHelper.exceed(
                letterIndex + shift,
                { min: 0, max: alphabet.length }
              );
              return alphabet[exceededNumber];
            }
            return letter;
          })
          .join("");
      })
      .join(" ");
  }
}

const message = "helloworld";
const ciphred = CaesarCipherHelper.encryptOrDecrypt(message, -7);
const deciphred = CaesarCipherHelper.encryptOrDecrypt(message, 0);

module.exports = CaesarCipherHelper;
