import { Response } from "express";
import { paginationInterface } from "@/interfaces";
import { responseMessage } from "@/enums";
export class APIResponse {
  res: Response;
  statusCode: number;
  responseData: Array<any> | object | null;
  message?: string;
  pagination?: paginationInterface;

  constructor(responseInfo: any) {
    this.statusCode = responseInfo.statusCode;
    this.responseData = responseInfo.data;
    this.res = responseInfo.res;
    this.message = responseInfo.message;
    this.pagination = responseInfo.pagination;
  }

  success() {
    let apiResponse: any = {
      data: this.responseData ?? [],
      message: this.message ?? responseMessage.SUCCESS,
    };
    if (this.pagination)
      apiResponse = { ...apiResponse, pagination: this.pagination };

    return this.res.status(this.statusCode).json(apiResponse);
  }

  failed(error?: Error) {
    let errorResponse: any = {
      error: error?.message,
      message: this.message ?? responseMessage.SOMETHING_WENT_WRONG,
    };
    return this.res.status(this.statusCode).json(errorResponse);
  }
}
