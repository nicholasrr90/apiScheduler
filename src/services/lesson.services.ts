import { prisma } from "../database/prisma";
import { ILesson, ILessonCreate } from "../interfaces/lesson.interface";
import { lessonSchema } from "../schemas/lesson.schemas";

export class LessonService {
   
   public create = async (payload: ILessonCreate): Promise<ILesson> => {
      const newLesson = await prisma.classModule.create({ data: payload });
      return lessonSchema.parse(newLesson);
    };
  
    public list = async() => {
      return await prisma.classModule.findMany();
    }
    
    public listOneLesson = async (id: number) => {
      return await prisma.classModule.findUnique({
        where: {
          id: Number(id),
        },
   })
  }

  public delete = async (id: number) => {
    return await prisma.classModule.delete({ where: { id: id }});
}

}