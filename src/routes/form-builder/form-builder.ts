import {
  createForm,
  deleteFormStructure,
  getFormStructure,
  getFormStructureById,
  saveFormData,
} from "@/controllers";
import express from "express";

const router = express.Router();

// form structure routes
router.get("/form", getFormStructure);
router.get("/form/:id", getFormStructureById);
router.post("/create-form", createForm);
router.delete("/form/:formId", deleteFormStructure);

// form response routes
router.post("/save-form", saveFormData);

export { router as formBuilderRoutes };
