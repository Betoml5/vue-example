export class ErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ErrorHandler(400, message);
  }

  static notFound(message) {
    return new ErrorHandler(404, message);
  }
}

export class AuthErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static unauthorized(message) {
    return new AuthError(401, message);
  }

  static forbidden(message) {
    return new AuthError(403, message);
  }
}
