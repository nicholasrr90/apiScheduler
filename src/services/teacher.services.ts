import { prisma } from "../database/prisma";
import { ITeacher, ITeacherCreate } from "../interfaces/teacher.interface";
import { teacherSchema } from "../schemas/teacher.schemas";

export class TeacherService {
   
   public create = async (payload: ITeacherCreate): Promise<ITeacher> => {
    console.log("*******************AQUI DEU ***********************")
      const newTeacher = await prisma.teacher.create({ data: payload });
      return teacherSchema.parse(newTeacher);
    };
  
    public list = async() => {
      return await prisma.teacher.findMany();
    }
    
   }