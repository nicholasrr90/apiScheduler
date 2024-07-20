import { Router } from "express";
import { StudentControllers } from "../controllers/student.controllers.js";
export const studentRoutes = Router();
const studentControllers = new StudentControllers();
studentRoutes.post("/student", studentControllers.create);
studentRoutes.get("/student", studentControllers.getStudents);
studentRoutes.get("/student/:id", studentControllers.getOneStudent);
studentRoutes.delete("/student/:id", studentControllers.delete);
