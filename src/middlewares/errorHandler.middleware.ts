import { httpStatusCode, nodeEnvironmentTypes, responseMessage } from "@/enums";
import { ApiError } from "@/utils";
import { NextFunction, Request, Response, response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader("Content-Type", "application/json");

  if (err instanceof ApiError) {
    const errorResponse: any = {
      message: err.message,
      type: err.type,
      statusCode: err.statusCode,
    };
    console.log("restypeeee", res.getHeader("Content-Type"));

    if (process.env.NODE_ENV === nodeEnvironmentTypes.DEVELOPEMENT) {
      errorResponse.errors = err?.errors;
      errorResponse.stack = err.stack;
    }

    return res
      .status(err.statusCode || httpStatusCode.INTERNAL_SERVER_ERROR)
      .json(errorResponse);
  }
  next();

  // Handle other types of errors
  return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
    message: err.message || responseMessage.SOMETHING_WENT_WRONG,
    type: responseMessage.FAILED,
    statusCode: httpStatusCode.INTERNAL_SERVER_ERROR,
  });
};
