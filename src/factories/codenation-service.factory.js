/** Services */
const { CodenationService, AxiosService } = require("../services");

/** Configurations */
const { codenationConfig } = require("../configs");

class CodenationServiceFactory {
  static fabricate() {
    const axiosServiceInstance = new AxiosService(
      "https://api.codenation.dev/v1/challenge/dev-ps/"
    );
    const codenationServiceInstance = new CodenationService(
      axiosServiceInstance.request,
      codenationConfig
    );
    return codenationServiceInstance;
  }
}

module.exports = CodenationServiceFactory;
