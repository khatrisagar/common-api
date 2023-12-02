import { Schema, model } from "mongoose";

const formBuilderStructure = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    structure: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FormStructure = model(
  "form-builder-structure",
  formBuilderStructure
);
