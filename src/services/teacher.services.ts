import { prisma } from "../database/prisma";
import { ITeacher, ITeacherCreate } from "../interfaces/teacher.interface";
import { teacherSchema, teacherCreateSchema } from "../schemas/teacher.schemas";
import { z } from "zod";

export class TeacherService {
  public create = async (payload: ITeacherCreate): Promise<ITeacher> => {
    try {
      const validatedPayload = teacherCreateSchema.parse(payload);
      const newTeacher = await prisma.teacher.create({ data: validatedPayload });
      return teacherSchema.parse(newTeacher);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(`Validation error: ${error.errors.map(e => e.message).join(", ")}`);
      }
      throw new Error(`Failed to create teacher: ${(error as Error).message}`);
    }
  };

  public list = async (): Promise<ITeacher[]> => {
    try {
      const teachers = await prisma.teacher.findMany();
      return teachers.map(teacher => teacherSchema.parse(teacher));
    } catch (error) {
      throw new Error(`Failed to list teachers: ${(error as Error).message}`);
    }
  };

  public listOneTeacher = async (id: number): Promise<ITeacher | null> => {
    try {
      const teacher = await prisma.teacher.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!teacher) {
        return null;
      }
      return teacherSchema.parse(teacher);
    } catch (error) {
      throw new Error(`Failed to get teacher with id ${id}: ${(error as Error).message}`);
    }
  };

  public delete = async (id: number): Promise<void> => {
    try {
      await prisma.teacher.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new Error(`Failed to delete teacher with id ${id}: ${(error as Error).message}`);
    }
  };
}
