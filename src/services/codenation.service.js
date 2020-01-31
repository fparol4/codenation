/** Errors */
const { MissingParamError } = require("../errors/app");

class CodenationService {
  constructor({ request } = {}, { token } = {}) {
    if (!request) {
      throw new MissingParamError("requestInterface");
    }

    this.request = request;

    if (!token) {
      throw new MissingParamError("codenationAuthorizationToken");
    }

    this.token = token;
  }

  async getGeneratedData() {
    const response = await this.request("generate-data", {
      params: {
        token: process.env.CODENATION_TOKEN
      }
    });
    return response.data;
  }
}

module.exports = CodenationService;
