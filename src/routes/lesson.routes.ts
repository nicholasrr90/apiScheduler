import { Router } from "express";
import { LessonControllers } from "../controllers/lesson.controllers";


export const lessonRoutes = Router();

const lessonControllers = new LessonControllers();

lessonRoutes.post("/lesson", lessonControllers.create);
lessonRoutes.get("/lesson", lessonControllers.getLessons);
lessonRoutes.get("/lesson/:id", lessonControllers.getOneLesson);
lessonRoutes.delete("/lesson/:id",  lessonControllers.delete);


