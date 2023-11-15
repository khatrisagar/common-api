import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongoDb } from "@/configs";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 9999;
connectMongoDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
import { formBuilderRoutes } from "@/routes";

// formbuilder
app.use("/form-builder", formBuilderRoutes);

app.listen(PORT, () => {
  console.log(`Server Listening on the PORT => ${PORT}`);
});
