import { Router } from "express";
import { TeacherControllers } from "../controllers/teacher.controllers";


export const teacherRoutes = Router();

const teacherControllers = new TeacherControllers();

teacherRoutes.post("/", teacherControllers.create);
teacherRoutes.get("/", teacherControllers.getTeachers);
teacherRoutes.get("/:id", teacherControllers.getOneTeacher);
teacherRoutes.delete("/:id",  teacherControllers.delete);


