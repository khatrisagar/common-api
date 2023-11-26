import express, { Application } from "express";
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

// global error handler
import { errorHandler } from "@/middlewares";
app.use(errorHandler);

export default app;
