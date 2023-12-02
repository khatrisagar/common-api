import { Response, response } from "express";
import { paginationInterface } from "@/interfaces";
import { responseMessage } from "@/enums";
export class APIResponsee {
  res: Response;
  statusCode: number;
  responseData: Array<any> | object | null;
  type?: string;
  message?: string;
  pagination?: paginationInterface;

  constructor(responseInfo: any) {
    this.statusCode = responseInfo.statusCode;
    this.responseData = responseInfo.data;
    this.res = responseInfo.res;
    this.message = responseInfo.message;
    this.pagination = responseInfo.pagination;
    this.type = responseInfo.responseType;
  }

  success() {
    let apiResponse: any = {
      data: this.responseData ?? [],
      type: this.type ?? responseMessage.SUCCESS,
      message: this.message ?? responseMessage.SUCCESS,
    };
    if (this.pagination)
      apiResponse = { ...apiResponse, pagination: this.pagination };

    return this.res.status(this.statusCode).json(apiResponse);
  }

  failed(error?: Error) {
    let errorResponse: any = {
      error: error?.message,
      type: this.type ?? responseMessage.FAILED,
      message: this.message ?? responseMessage.SOMETHING_WENT_WRONG,
    };
    return this.res.status(this.statusCode).json(errorResponse);
  }
}
