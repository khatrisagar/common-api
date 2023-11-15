import { createForm } from "@/controllers/form-builder/create-form.controller";
import express from "express";

const router = express.Router();

router.get("/create-form", createForm);

export { router as formBuilderRoutes };
