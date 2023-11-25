import { Schema, model } from "mongoose";

const formResponseSchema = new Schema(
  {
    formId: {
      type: Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "form-builder-structure",
    },
    formData: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FormResponses = model(
  "form-builder-responses",
  formResponseSchema
);
