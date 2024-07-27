import { Router } from "express";
import { LessonControllers } from "../controllers/lesson.controllers";


export const lessonRoutes = Router();

const lessonControllers = new LessonControllers();

lessonRoutes.post("/", lessonControllers.create);
lessonRoutes.get("/", lessonControllers.getLessons);
lessonRoutes.get("/:id", lessonControllers.getOneLesson);
lessonRoutes.delete("/:id",  lessonControllers.delete);


