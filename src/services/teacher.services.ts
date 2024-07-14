import { prisma } from "../database/prisma";
import { ITeacher, ITeacherCreate } from "../interfaces/teacher.interface";
import { teacherSchema } from "../schemas/teacher.schemas";

export class TeacherService {
   
   public create = async (payload: ITeacherCreate): Promise<ITeacher> => {
    console.log(payload)
      const newTeacher = await prisma.teacher.create({ data: payload });
      return teacherSchema.parse(newTeacher);
    };
  
    public list = async() => {
      return await prisma.teacher.findMany();
    }
    
    public listOneTeacher = async (id: number) => {
      return await prisma.teacher.findUnique({
        where: {
          id: Number(id),
        },
   })
  }

  public delete = async (id: number) => {
    return await prisma.teacher.delete({ where: { id: id }});
}

}