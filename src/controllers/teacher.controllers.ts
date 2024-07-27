import { Request, Response } from "express";
import { TeacherService } from "../services/teacher.services";
import { teacherCreateSchema } from "../schemas/teacher.schemas";
import { ITeacherCreate } from "../interfaces/teacher.interface";
import {createLogger} from "../utils/logger"; // Supondo que você tenha um logger configurado
import { z } from "zod";

const logger = createLogger("teacher-controller");


export class TeacherControllers {

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      // Validação dos dados de entrada com Zod
      const validatedData: ITeacherCreate = teacherCreateSchema.parse(req.body);
      
      const teacherService = new TeacherService();
      const response = await teacherService.create(validatedData);
      return res.status(201).json(response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        logger.error(error.errors);
        return res.status(400).json({ errors: error.errors });
      }
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  getTeachers = async (req: Request, res: Response): Promise<Response> => {
    try {
      const teacherService = new TeacherService();
      const response = await teacherService.list();
      return res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  getOneTeacher = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const teacherService = new TeacherService();
      const response = await teacherService.listOneTeacher(Number(id));
      return res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const teacherService = new TeacherService();
      await teacherService.delete(Number(id));
      return res.status(204).send();
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
