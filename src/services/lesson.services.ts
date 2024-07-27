import { prisma } from "../database/prisma";
import { ILesson, ILessonCreate } from "../interfaces/lesson.interface";
import { lessonSchema, lessonCreateSchema } from "../schemas/lesson.schemas";
import { z } from "zod";

export class LessonService {
  public create = async (payload: ILessonCreate): Promise<ILesson> => {
    try {
      const validatedPayload = lessonCreateSchema.parse(payload);
      const newLesson = await prisma.classModule.create({ data: validatedPayload });
      return lessonSchema.parse(newLesson);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw error; // Lança o erro de validação para ser capturado pelo middleware
      }
      throw new Error(`Failed to create lesson: ${(error as Error).message}`);
    }
  };

  public list = async (): Promise<ILesson[]> => {
    try {
      const lessons = await prisma.classModule.findMany();
      return lessons.map(lesson => lessonSchema.parse(lesson));
    } catch (error) {
      throw new Error(`Failed to list lessons: ${(error as Error).message}`);
    }
  };

  public listOneLesson = async (id: number): Promise<ILesson | null> => {
    try {
      const lesson = await prisma.classModule.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!lesson) {
        return null;
      }
      return lessonSchema.parse(lesson);
    } catch (error) {
      throw new Error(`Failed to get lesson with id ${id}: ${(error as Error).message}`);
    }
  };

  public delete = async (id: number): Promise<void> => {
    try {
      await prisma.classModule.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new Error(`Failed to delete lesson with id ${id}: ${(error as Error).message}`);
    }
  };
}
