import { httpStatusCode, responseMessage } from "@/enums";
import {
  createFormDb,
  deleteFormStructureDb,
  getFormStructureByIdDb,
  getFormStructureDb,
} from "@/services";
import { APIResponsee, ApiError, ApiResponse } from "@/utils";
import { NextFunction, Request, Response } from "express";

export const createForm = async (req: Request, res: Response) => {
  try {
    const createData = await createFormDb(req.body);
    return new APIResponsee({
      res,
      statusCode: httpStatusCode.OK,
      data: createData,
      message: responseMessage.FORM_CREATED,
    }).success();
  } catch (error) {
    return new APIResponsee({
      res,
      statusCode: httpStatusCode.INTERNAL_SERVER_ERROR,
      message: responseMessage.SOMETHING_WENT_WRONG,
    }).failed(error as Error);
  }
};

export const getFormStructure = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allFormStructure = await getFormStructureDb();

    const apiResponse = new ApiResponse({
      res,
      statusCode: httpStatusCode.CREATED,
      data: allFormStructure,
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

export const getFormStructureById = async (req: Request, res: Response) => {
  try {
    const formId = req.params.id;
    const formStructure = await getFormStructureByIdDb(formId);
    return new APIResponsee({
      res,
      statusCode: httpStatusCode.OK,
      data: formStructure,
      message: responseMessage.FORM_CREATED,
    }).success();
  } catch (error) {
    return new APIResponsee({
      res,
      statusCode: httpStatusCode.INTERNAL_SERVER_ERROR,
      message: responseMessage.SOMETHING_WENT_WRONG,
    }).failed(error as Error);
  }
};

export const deleteFormStructure = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const formId = req.params.formId;
    const formStructure = await getFormStructureByIdDb(formId);
    if (!formStructure)
      throw new ApiError(
        httpStatusCode.RESOURCE_NOT_FOUND,
        responseMessage.FORM_NOT_FOUND
      );
    await deleteFormStructureDb(formId);
    const apiResponse = new ApiResponse({
      res,
      statusCode: httpStatusCode.OK,
      message: responseMessage.FORM_DELETED,
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
