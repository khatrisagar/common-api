import { httpStatusCode, responseMessage } from "@/enums";
import { createFromDb, getFormStructureDb } from "@/services";
import { APIResponse } from "@/utils";
import { Request, Response } from "express";

export const createForm = async (req: Request, res: Response) => {
  try {
    const createData = await createFromDb(req.body);
    return new APIResponse({
      res,
      statusCode: httpStatusCode.OK,
      data: createData,
      message: responseMessage.FORM_CREATED,
    }).success();
  } catch (error) {
    return new APIResponse({
      res,
      statusCode: httpStatusCode.INTERNAL_SERVER_ERROR,
      message: responseMessage.SOMETHING_WENT_WRONG,
    }).failed(error as Error);
  }
};

export const getFormStructure = async (req: Request, res: Response) => {
  try {
    const formId = req.params.id;
    const formStructure = await getFormStructureDb(formId);
    return new APIResponse({
      res,
      statusCode: httpStatusCode.OK,
      data: formStructure,
      message: responseMessage.FORM_CREATED,
    }).success();
  } catch (error) {
    return new APIResponse({
      res,
      statusCode: httpStatusCode.INTERNAL_SERVER_ERROR,
      message: responseMessage.SOMETHING_WENT_WRONG,
    }).failed(error as Error);
  }
};
