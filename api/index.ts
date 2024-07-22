import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import cors from "cors";
import { teacherRoutes } from "../src/routes/teacher.routes";
import { studentRoutes } from "../src/routes/student.routes";
import { lessonRoutes } from "../src/routes/lesson.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Define routes
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "teste github" });
});

app.use("/teacher", teacherRoutes);
app.use("/student", studentRoutes);
app.use("/lesson", lessonRoutes);

// Error handling middleware
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
};

app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
