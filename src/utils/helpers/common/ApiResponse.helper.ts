import { Response, response } from "express";
import { paginationInterface } from "@/interfaces";
import { responseMessage } from "@/enums";
export class APIResponse {
  res: Response;
  statusCode: number;
  data: Array<any> | object | null;
  responseType?: string;
  message?: string;
  pagination?: paginationInterface;

  constructor(responseInfo: any) {
    this.res = responseInfo.res;
    this.statusCode = responseInfo.statusCode;
    this.data = responseInfo.data;
    this.message = responseInfo.message ?? "";
    this.responseType = responseInfo.responseType ?? responseMessage.SUCCESS;

    if (responseInfo.pagination) {
      this.pagination = responseInfo.pagination;
    }
  }
}
