const {} = require("http-status-code");
const CustomAPIError = require("./customAPIErrors");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends CustomAPIError {
  constructor(messagae) {
    super(messagae);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
