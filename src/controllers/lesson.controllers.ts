import { Request, Response } from "express";
import { LessonService } from "../services/lesson.services";
import { lessonCreateSchema } from "../schemas/lesson.schemas"; 
import { ILessonCreate } from "../interfaces/lesson.interface";
import {createLogger} from "../utils/logger";
import { z } from "zod";

const logger = createLogger("lesson-controller");
export class LessonControllers {


  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      // Validação dos dados de entrada com Zod
      const validatedData: ILessonCreate = lessonCreateSchema.parse(req.body);
      
      const lessonService = new LessonService();
      const response = await lessonService.create(validatedData);

      return res.status(201).json(response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        logger.error(error.errors);
        return res.status(400).json({ errors: error.errors });
      }
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  getLessons = async (req: Request, res: Response): Promise<Response> => {
    try {
      const lessonService = new LessonService();
      const response = await lessonService.list();
      
      return res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  getOneLesson = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const lessonService = new LessonService();
      const response = await lessonService.listOneLesson(Number(id));
      
      return res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const lessonService = new LessonService();
      await lessonService.delete(Number(id));
      
      return res.status(204).send();
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}
