import { Response } from "express";
import { commonApiResponseInterface, paginationInterface } from "@/interfaces";
import { httpStatusCode, responseMessage } from "@/enums";
import { commonApiResponseDataInterface } from "@/interfaces";

export class ApiResponse {
  res: Response;
  statusCode: number;
  data: Array<any> | object | null;
  type?: string;
  message?: string;
  pagination?: paginationInterface;

  constructor(responseInfo: commonApiResponseDataInterface) {
    this.res = responseInfo.res;
    this.statusCode = responseInfo.statusCode ?? httpStatusCode.OK;
    this.data = responseInfo.data;
    this.message = responseInfo.message ?? "";
    this.type = responseInfo.type ?? responseMessage.SUCCESS;

    if (responseInfo.pagination) {
      this.pagination = responseInfo.pagination;
    }
  }

  send() {
    let responseData: commonApiResponseInterface = {
      data: this.data,
      type: this.type,
      message: this.message,
    };

    if (this.pagination)
      responseData = { ...responseData, pagination: this.pagination };
    this.res.status(this.statusCode).json(responseData);
  }
}
