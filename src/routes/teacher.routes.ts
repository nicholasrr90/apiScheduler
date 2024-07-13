import { Router } from "express";
import { TeacherControllers } from "../controllers/teacher.controllers";


export const teacherRoutes = Router();

const teacherControllers = new TeacherControllers();

teacherRoutes.post("/teacher", teacherControllers.create);

teacherRoutes.get("/teacher", teacherControllers.getTeachers);
