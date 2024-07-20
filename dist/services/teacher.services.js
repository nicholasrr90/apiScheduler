import { prisma } from "../database/prisma";
import { teacherSchema } from "../schemas/teacher.schemas";
export class TeacherService {
    create = async (payload) => {
        console.log(payload);
        const newTeacher = await prisma.teacher.create({ data: payload });
        return teacherSchema.parse(newTeacher);
    };
    list = async () => {
        return await prisma.teacher.findMany();
    };
    listOneTeacher = async (id) => {
        return await prisma.teacher.findUnique({
            where: {
                id: Number(id),
            },
        });
    };
    delete = async (id) => {
        return await prisma.teacher.delete({ where: { id: id } });
    };
}
