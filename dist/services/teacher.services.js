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
import { teacherSchema } from "../schemas/teacher.schemas.js";
export class TeacherService {
    constructor() {
        this.create = (payload) => __awaiter(this, void 0, void 0, function* () {
            console.log(payload);
            const newTeacher = yield prisma.teacher.create({ data: payload });
            return teacherSchema.parse(newTeacher);
        });
        this.list = () => __awaiter(this, void 0, void 0, function* () {
            return yield prisma.teacher.findMany();
        });
        this.listOneTeacher = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma.teacher.findUnique({
                where: {
                    id: Number(id),
                },
            });
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma.teacher.delete({ where: { id: id } });
        });
    }
}
