import { Request, Response } from "express";
import { StudentService } from "../services/student.services";
import { studentCreateSchema } from "../schemas/student.schemas";
import { IStudentCreate } from "../interfaces/student.interface";
import {createLogger} from "../utils/logger"; // Supondo que você tenha um logger configurado
import { z } from "zod";

const logger = createLogger("student-controller");

export class StudentControllers {
  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      // Validação dos dados de entrada com Zod
      const validatedData: IStudentCreate = studentCreateSchema.parse(req.body);

      const studentService = new StudentService();
      const response = await studentService.create(validatedData);
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

  getStudents = async (req: Request, res: Response): Promise<Response> => {
    try {
      const studentService = new StudentService();
      const response = await studentService.list();
      return res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  getOneStudent = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const studentService = new StudentService();
      const response = await studentService.listOneStudent(Number(id));
      return res.status(200).json(response);
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const studentService = new StudentService();
      await studentService.delete(Number(id));
      return res.status(204).send();
    } catch (error) {
      logger.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}
