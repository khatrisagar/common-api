import { FormResponses } from "@/models";

export const saveFormDb = (fromResponseData: any) => {
  try {
    return FormResponses.create(fromResponseData);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
