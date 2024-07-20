import { prisma } from "../database/prisma.js";
import { lessonSchema, lessonCreateSchema } from "../schemas/lesson.schemas.js";
export class LessonService {
    create = async (payload) => {
        // Valide o payload antes de usá-lo
        lessonCreateSchema.parse(payload);
        const newLesson = await prisma.classModule.create({ data: payload });
        return lessonSchema.parse(newLesson);
    };
    list = async () => {
        return await prisma.classModule.findMany();
    };
    listOneLesson = async (id) => {
        return await prisma.classModule.findUnique({
            where: {
                id: Number(id),
            },
        });
    };
    delete = async (id) => {
        return await prisma.classModule.delete({ where: { id: id } });
    };
}
