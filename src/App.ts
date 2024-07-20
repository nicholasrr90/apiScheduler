import express, { json } from "express";
import { teacherRoutes } from "./routes/teacher.routes";
import { studentRoutes } from "./routes/student.routes";
import { lessonRoutes } from "./routes/lesson.routes";
import cors from 'cors';

export const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.use(cors());

app.use(json());
app.use("/", teacherRoutes);
app.use("/", studentRoutes);
app.use("/", lessonRoutes);

