import { NextFunction, Request, Response } from "express";
import { ApiError, ApiResponse } from "@/utils";
import { httpStatusCode, responseMessage } from "@/enums";
import { saveFormDb } from "@/services";
import { apiErrorResponseInterface } from "@/interfaces";
import mongoose from "mongoose";

export const saveFormData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const savedData = await saveFormDb(req.body);

    const apiResponse = new ApiResponse({
      res,
      statusCode: httpStatusCode.CREATED,
      data: savedData,
      message: responseMessage.FORM_SAVED,
    });
    apiResponse.send();
  } catch (error) {
    if (error instanceof ApiError) {
      return next(new ApiError(error.statusCode, error.message));
    } else {
      return next(
        new ApiError(
          httpStatusCode.INTERNAL_SERVER_ERROR,
          (error as Error).message,
          error
        )
      );
    }
  }
};
