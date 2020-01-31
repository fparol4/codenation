/** Errors */
const { MissingParamError } = require("../errors/app");

/** Helpers */
const { WriteJSONFileHelper, ReadFileHelper } = require("../helpers/files");

/** Factories */
const FormDataFactory = require("../factories/form-data.factory");

class CodenationService {
  constructor(request, { token } = {}) {
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
        token: this.token
      }
    });
    return response.data;
  }

  async sendFixedData(fixedData) {
    await WriteJSONFileHelper.write("answer", JSON.stringify(fixedData));
    const formData = FormDataFactory.fabricate("answer", "answer.json");

    const request = await this.request
      .post("submit-solution", formData, {
        params: {
          token: this.token
        },
        headers: { ...formData.getHeaders() }
      })
      .catch(err => {
        console.log(err);
      });

    return request;
  }
}

module.exports = CodenationService;
