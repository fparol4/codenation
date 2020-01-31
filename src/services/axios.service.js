const axios = require("axios");

class AxiosService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.request = axios.create({
      baseURL: this.baseURL,
      timeout: 1000
    });
  }
}

module.exports = AxiosService;
