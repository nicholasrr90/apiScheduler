"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonRoutes = void 0;
const express_1 = require("express");
const lesson_controllers_1 = require("../controllers/lesson.controllers");
exports.lessonRoutes = (0, express_1.Router)();
const lessonControllers = new lesson_controllers_1.LessonControllers();
exports.lessonRoutes.post("/lesson", lessonControllers.create);
exports.lessonRoutes.get("/lesson", lessonControllers.getLessons);
exports.lessonRoutes.get("/lesson/:id", lessonControllers.getOneLesson);
exports.lessonRoutes.delete("/lesson/:id", lessonControllers.delete);
