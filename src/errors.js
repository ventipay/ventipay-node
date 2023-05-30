/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
class VentiPayError extends Error {
  constructor(...params) {
    super(params);
    this.name = this.constructor.name;
  }

  static generate({ type, code } = {}) {
    if (type === 'authentication_error') {
      return new VentiPayAuthError();
    }
    if (type === 'charge_error') {
      return new VentiPayChargeError();
    }
    if (type === 'invalid_request_error') {
      if (code === 'not_found') {
        return new VentiPayNotFoundError();
      }
      return new VentiPayInvalidError();
    }
    if (type === 'request_error') {
      return new VentiPayRequestError();
    }
    if (type === 'idempotency_error') {
      return new VentiPayIdempotencyError();
    }
    if (type === 'rate_limit_error') {
      return new VentiPayRateLimitError();
    }
    return new VentiPayUnknownError();
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
