import express, { Application, Request, Response } from "express";
import cors from "cors";
import { connectMongoDb } from "@/configs";
import { config } from "dotenv";

const app: Application = express();

config();

connectMongoDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
import { formBuilderRoutes } from "@/routes";

// formbuilder
app.use("/form-builder", formBuilderRoutes);

export default app;
