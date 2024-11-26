const {} = require("http-status-code");
const CustomAPIError = require("./customAPIErrors");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends CustomAPIError {
  constructor(messagae) {
    super(messagae);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
