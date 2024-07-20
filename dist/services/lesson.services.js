var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { prisma } from "../database/prisma.js";
import { lessonSchema } from "../schemas/lesson.schemas.js";
export class LessonService {
    constructor() {
        this.create = (payload) => __awaiter(this, void 0, void 0, function* () {
            const newLesson = yield prisma.classModule.create({ data: payload });
            return lessonSchema.parse(newLesson);
        });
        this.list = () => __awaiter(this, void 0, void 0, function* () {
            return yield prisma.classModule.findMany();
        });
        this.listOneLesson = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma.classModule.findUnique({
                where: {
                    id: Number(id),
                },
            });
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma.classModule.delete({ where: { id: id } });
        });
    }
}
