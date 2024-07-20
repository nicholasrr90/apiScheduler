import { prisma } from "../database/prisma";
import { studentSchema } from "../schemas/student.schemas";
export class StudentService {
    create = async (payload) => {
        const newStudent = await prisma.student.create({ data: payload });
        return studentSchema.parse(newStudent);
    };
    list = async () => {
        return await prisma.student.findMany();
    };
    listOneStudent = async (id) => {
        return await prisma.student.findUnique({
            where: {
                id: Number(id),
            },
        });
    };
    delete = async (id) => {
        return await prisma.student.delete({ where: { id: id } });
    };
}
