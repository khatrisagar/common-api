import { FormStructure } from "@/models";

export const createFromDb = (formStructureData: any) => {
  try {
    return FormStructure.create(formStructureData);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
export const getFormStructureDb = (formId: string) => {
  try {
    return FormStructure.findById(formId);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
