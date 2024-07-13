import { Request, Response } from "express";
import { TeacherService } from "../services/teacher.services";
import { teacherCreateSchema } from "../schemas/teacher.schemas"; // Supondo que você tenha um esquema para validação

export class TeacherControllers {
  
  create = async (req: Request, res: Response) => {
    try {
      // Validação de dados
      const validatedData = teacherCreateSchema.parse(req.body);
      const teacherService = new TeacherService();
      const response = await teacherService.create(validatedData);
      return res.status(201).json(response);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Invalid data" });
    }
  }
  
  getTeachers = async (req: Request, res: Response) => {
    try {
      const teacherService = new TeacherService();
      const response = await teacherService.list();
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
