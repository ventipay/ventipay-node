/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
class VentiPayError extends Error {
  constructor(message, {
    type, code, status, requestId,
  } = {}) {
    super(message || 'An error occurred while communicating with the Venti API');
    this.name = this.constructor.name;
    this.type = type;
    this.code = code;
    this.status = status;
    this.requestId = requestId;
  }

  static generate({
    type, code, message, status, requestId,
  } = {}) {
    const meta = {
      type, code, status, requestId,
    };
    if (type === 'authentication_error') {
      return new VentiPayAuthError(message, meta);
    }
    if (type === 'charge_error') {
      return new VentiPayChargeError(message, meta);
    }
    if (type === 'invalid_request_error') {
      if (code === 'not_found') {
        return new VentiPayNotFoundError(message, meta);
      }
      return new VentiPayInvalidError(message, meta);
    }
    if (type === 'request_error') {
      return new VentiPayRequestError(message, meta);
    }
    if (type === 'idempotency_error') {
      return new VentiPayIdempotencyError(message, meta);
    }
    if (type === 'rate_limit_error') {
      return new VentiPayRateLimitError(message, meta);
    }
    return new VentiPayUnknownError(message, meta);
  }
}

class VentiPayAuthError extends VentiPayError { }

class VentiPayChargeError extends VentiPayError { }

class VentiPayNotFoundError extends VentiPayError { }

class VentiPayInvalidError extends VentiPayError { }

class VentiPayRequestError extends VentiPayError { }

class VentiPayIdempotencyError extends VentiPayError { }

class VentiPayRateLimitError extends VentiPayError { }

class VentiPayUnknownError extends VentiPayError { }

module.exports.generate = VentiPayError.generate;
module.exports.VentiPayError = VentiPayError;
module.exports.VentiPayAuthError = VentiPayAuthError;
module.exports.VentiPayChargeError = VentiPayChargeError;
module.exports.VentiPayNotFoundError = VentiPayNotFoundError;
module.exports.VentiPayInvalidError = VentiPayInvalidError;
module.exports.VentiPayRequestError = VentiPayRequestError;
module.exports.VentiPayIdempotencyError = VentiPayIdempotencyError;
module.exports.VentiPayRateLimitError = VentiPayRateLimitError;
module.exports.VentiPayUnknownError = VentiPayUnknownError;
