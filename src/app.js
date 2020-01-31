require("dotenv").config();

/** Servies */
const { AxiosService } = require("./services");

/** Errors */
const { MissingParamError } = require("./errors/app");

/** Helpers */
const { CaesarCipherHelper } = require("./helpers/strings");

const axiosInstance = new AxiosService(
  "https://api.codenation.dev/v1/challenge/dev-ps/"
);

const getGeneratedData = ({ request } = {}) => {
  if (!request) {
    throw new MissingParamError("requestInterface");
  }

  return request.get("generate-data", {
    params: {
      token: process.env.CODENATION_TOKEN
    }
  });
};

(async () => {
  const generatedDataRequest = await getGeneratedData(axiosInstance);
  const { data } = generatedDataRequest;
  const { cifrado, numero_casas } = data;
  const fixedGeneratedData = {
    ...data,
    decifrado: CaesarCipherHelper.encryptOrDecrypt(cifrado, -numero_casas)
  };
  console.log(fixedGeneratedData);
})();
