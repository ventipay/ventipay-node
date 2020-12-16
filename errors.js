class VENTIPayError extends Error {
  constructor(...params) {
    super(params);
    this.name = this.constructor.name;
  }

  static generate({ type, code } = {}) {
    if (type === 'authentication_error') {
      return new VENTIPayAuthError();
    }
    if (type === 'invalid_request_error') {
      if (code === 'not_found') {
        return new VENTIPayNotFoundError();
      }
      return new VENTIPayInvalidError();
    }
    if (type === 'request_error') {
      return new VENTIPayRequestError();
    }
    if (type === 'idempotency_error') {
      return new VENTIPayIdempotencyError();
    }
    if (type === 'rate_limit_error') {
      return new VENTIPayRateLimitError();
    }
    return new VENTIPayUnknownError();
  }
}

class VENTIPayAuthError extends VENTIPayError { }

class VENTIPayNotFoundError extends VENTIPayError { }

class VENTIPayInvalidError extends VENTIPayError { }

class VENTIPayRequestError extends VENTIPayError { }

class VENTIPayIdempotencyError extends VENTIPayError { }

class VENTIPayRateLimitError extends VENTIPayError { }

class VENTIPayUnknownError extends VENTIPayError { }

module.exports.generate = VENTIPayError.generate;
module.exports.VENTIPayError = VENTIPayError;
module.exports.VENTIPayAuthError = VENTIPayAuthError;
module.exports.VENTIPayNotFoundError = VENTIPayNotFoundError;
module.exports.VENTIPayInvalidError = VENTIPayInvalidError;
module.exports.VENTIPayRequestError = VENTIPayRequestError;
module.exports.VENTIPayIdempotencyError = VENTIPayIdempotencyError;
module.exports.VENTIPayRateLimitError = VENTIPayRateLimitError;
module.exports.VENTIPayUnknownError = VENTIPayUnknownError;
