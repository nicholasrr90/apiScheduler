import { prisma } from "../database/prisma";
import { IStudent, IStudentCreate } from "../interfaces/student.interface";
import { studentSchema, studentCreateSchema } from "../schemas/student.schemas";
import { z } from "zod";

export class StudentService {
  // Criação de um novo estudante
  public create = async (payload: IStudentCreate): Promise<IStudent> => {
    try {
      // Validação do payload de entrada
      const validatedPayload = studentCreateSchema.parse(payload);
      // Criação do novo estudante
      const newStudent = await prisma.student.create({ data: validatedPayload });
      // Validação dos dados retornados
      return studentSchema.parse(newStudent);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw error; // Lança o erro de validação para ser capturado pelo middleware
      }
      throw new Error(`Failed to create student: ${(error as Error).message}`);
    }
  };

  // Listagem de todos os estudantes
  public list = async (): Promise<IStudent[]> => {
    try {
      const students = await prisma.student.findMany();
      return students.map(student => studentSchema.parse(student));
    } catch (error) {
      throw new Error(`Failed to list students: ${(error as Error).message}`);
    }
  };

  // Listagem de um estudante específico por ID
  public listOneStudent = async (id: number): Promise<IStudent | null> => {
    try {
      const student = await prisma.student.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!student) {
        return null;
      }
      return studentSchema.parse(student);
    } catch (error) {
      throw new Error(`Failed to get student with id ${id}: ${(error as Error).message}`);
    }
  };

  // Deleção de um estudante específico por ID
  public delete = async (id: number): Promise<void> => {
    try {
      await prisma.student.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new Error(`Failed to delete student with id ${id}: ${(error as Error).message}`);
    }
  };
}
