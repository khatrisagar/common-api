import { FormStructure } from "@/models";

export const createFormDb = (formStructureData: any) => {
  try {
    return FormStructure.create(formStructureData);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
export const getFormStructureDb = () => {
  try {
    return FormStructure.find();
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
export const getFormStructureByIdDb = (formId: string) => {
  try {
    return FormStructure.findById(formId);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const deleteFormStructureDb = (formId: string) => {
  try {
    return FormStructure.findByIdAndDelete(formId);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
