import { Router } from "express";
import { StudentControllers } from "../controllers/student.controllers";


export const studentRoutes = Router();

const studentControllers = new StudentControllers();

studentRoutes.post("/", studentControllers.create);
studentRoutes.get("/", studentControllers.getStudents);
studentRoutes.get("/:id", studentControllers.getOneStudent);
studentRoutes.delete("/:id",  studentControllers.delete);


