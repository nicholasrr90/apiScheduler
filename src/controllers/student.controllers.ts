import { Request, Response } from "express";
import { StudentService } from "../services/student.services";
import { studentCreateSchema } from "../schemas/student.schemas"; // Supondo que você tenha um esquema para validação
import { IStudentCreate } from "../interfaces/student.interface";

export class StudentControllers {
  create = async (req: Request, res: Response) => {
    try {
      const validatedData: IStudentCreate = req.body;
      
      const studentService = new StudentService();
      const response = await studentService.create(validatedData);
      return res.status(201).json(response);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Invalid data" });
    }
  };

  getStudents = async (req: Request, res: Response) => {
    try {
      const studentService = new StudentService();
      const response = await studentService.list();
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  getOneStudent = async (req: Request, res: Response) => {
    try {
      const studentService = new StudentService();
      const { id } = req.params;
      const response = await studentService.listOneStudent(Number(id));
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  delete(req: Request, res: Response) {
    const studentService = new StudentService();
    const { id } = req.params;
    studentService.delete(Number(id));
    return res.status(204).json();
  }
}
