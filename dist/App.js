import express, { json } from "express";
import { teacherRoutes } from "./routes/teacher.routes.js";
import { studentRoutes } from "./routes/student.routes.js";
import { lessonRoutes } from "./routes/lesson.routes.js";
import cors from 'cors';
export const app = express();
app.use(cors());
app.use(json());
app.use("/", teacherRoutes);
app.use("/", studentRoutes);
app.use("/", lessonRoutes);
