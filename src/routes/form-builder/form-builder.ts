import { createForm, getFormStructure } from "@/controllers";
import express from "express";

const router = express.Router();

router.get("/form/:id", getFormStructure);
router.post("/create-form", createForm);

export { router as formBuilderRoutes };
