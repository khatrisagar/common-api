import { httpStatusCode, responseMessage } from "@/enums";

class ApiError extends Error {
  statusCode: number;
  data: null;
  type: string;
  stack?: string;
  errors: any;

  constructor(
    statusCode: number,
    message: string = responseMessage.SOMETHING_WENT_WRONG,
    error?: any,
    stack: string = ""
  ) {
    super(message);
    this.statusCode = statusCode ?? httpStatusCode.INTERNAL_SERVER_ERROR;
    this.data = null;
    this.type = responseMessage.FAILED;
    this.message = message ?? responseMessage.SOMETHING_WENT_WRONG;
    this.errors = error.errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
