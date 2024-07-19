class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // ADD "MESSAGE" PROPERTY
    this.code = errorCode; // ADD "CODE" PROPERTY
  }
}

module.exports = HttpError;
