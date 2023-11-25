import { createForm, getFormStructure, saveFormData } from "@/controllers";
import express from "express";

const router = express.Router();

// form structure routes
router.get("/form/:id", getFormStructure);
router.post("/create-form", createForm);

// form response routes
router.post("/save-form", saveFormData);

export { router as formBuilderRoutes };
