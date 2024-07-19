import { prisma } from "../database/prisma";
import { IStudent, IStudentCreate } from "../interfaces/student.interface";
import { studentSchema } from "../schemas/student.schemas";

export class StudentService {
   
   public create = async (payload: IStudentCreate): Promise<IStudent> => {
      const newStudent = await prisma.student.create({ data: payload });
      return studentSchema.parse(newStudent);
    };
  
    public list = async() => {
      return await prisma.student.findMany();
    }
    
    public listOneStudent = async (id: number) => {
      return await prisma.student.findUnique({
        where: {
          id: Number(id),
        },
   })
  }

  public delete = async (id: number) => {
    return await prisma.student.delete({ where: { id: id }});
}

}