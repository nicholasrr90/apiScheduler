import express, { json } from "express";
import { teacherRoutes } from "./routes/teacher.routes";

import dotenv from 'dotenv';
dotenv.config();

export const app = express();

app.use(json());
app.use("/", teacherRoutes);