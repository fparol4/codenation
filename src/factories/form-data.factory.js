const fs = require("fs");
const FormData = require("form-data");

class FormDataFactory {
  static fabricate(formFileName, ...files) {
    const formData = new FormData();
    files.map(fileName =>
      formData.append(formFileName, fs.createReadStream(`./tmp/${fileName}`))
    );
    return formData;
  }
}

module.exports = FormDataFactory;
