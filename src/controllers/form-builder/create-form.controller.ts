import { httpStatusCode, responseMessage } from "@/enums";
import { APIResponse } from "@/utils/helpers/common/response.helper";
import { Request, Response } from "express";

export const createForm = (req: Request, res: Response) => {
  try {
    return new APIResponse({
      res,
      statusCode: httpStatusCode.OK,
      data: {},
      message: responseMessage.ITEM_NOT_FOUND,
    }).success();
  } catch (error) {
    return new APIResponse({
      res,
      statusCode: httpStatusCode.INTERNAL_SERVER_ERROR,
      message: responseMessage.SOMETHING_WENT_WRONG,
    }).failed();
  }
};
