require("dotenv").config();

/** Helpers */
const { CaesarCipherHelper, SHA1Helper } = require("./helpers/strings");

/** Factories */
const { CodenationServiceFactory } = require("./factories");

(async () => {
  const codenationService = CodenationServiceFactory.fabricate();
  const codenationData = await codenationService.getGeneratedData();
  const { cifrado, numero_casas } = codenationData;
  const decrypted = CaesarCipherHelper.encryptOrDecrypt(cifrado, -numero_casas);
  const sha1Resume = SHA1Helper.encrypt(decrypted);
  const fixedCodenationData = {
    ...codenationData,
    decifrado: decrypted,
    resumo_criptografico: sha1Resume
  };
  console.log(fixedCodenationData);
})();
