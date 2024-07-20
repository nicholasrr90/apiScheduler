import { Router } from "express";
import { TeacherControllers } from "../controllers/teacher.controllers.js";
export const teacherRoutes = Router();
const teacherControllers = new TeacherControllers();
teacherRoutes.post("/teacher", teacherControllers.create);
teacherRoutes.get("/teacher", teacherControllers.getTeachers);
teacherRoutes.get("/teacher/:id", teacherControllers.getOneTeacher);
teacherRoutes.delete("/teacher/:id", teacherControllers.delete);
