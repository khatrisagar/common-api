import { Schema, model } from "mongoose";

const formBuilderStructure = new Schema({
  name: {
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
});

export const formStructure = model(
  "form-builder-structure",
  formBuilderStructure
);
