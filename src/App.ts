import express, { json } from "express";
import { teacherRoutes } from "./routes/teacher.routes";
import { studentRoutes } from "./routes/student.routes";
import { lessonRoutes } from "./routes/lesson.routes";
export const app = express();

const cors = require('cors');


app.use(cors());

app.use(json());
app.use("/", teacherRoutes);
app.use("/", studentRoutes);
app.use("/", lessonRoutes);

