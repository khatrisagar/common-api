import { Request, Response } from "express";
import { ApiResponse } from "@/utils";
import { httpStatusCode, responseMessage } from "@/enums";
import { saveFormDb } from "@/services";

export const saveFormData = async (req: Request, res: Response) => {
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
    res.end("aaa");
    console.log("Error", error);
  }
};
