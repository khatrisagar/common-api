import { Response } from "express";
import { paginationInterface } from "@/interfaces/common";

export interface commonApiResponseInterface {
  data?: Array<any> | object | null;
  type?: string;
  message?: string;
  pagination?: paginationInterface;
}
export interface commonApiResponseDataInterface
  extends commonApiResponseInterface {
  res: Response;
  statusCode: number;
}
