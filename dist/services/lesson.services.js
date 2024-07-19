"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonService = void 0;
const prisma_1 = require("../database/prisma");
const lesson_schemas_1 = require("../schemas/lesson.schemas");
class LessonService {
    constructor() {
        this.create = (payload) => __awaiter(this, void 0, void 0, function* () {
            const newLesson = yield prisma_1.prisma.classModule.create({ data: payload });
            return lesson_schemas_1.lessonSchema.parse(newLesson);
        });
        this.list = () => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.classModule.findMany();
        });
        this.listOneLesson = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.classModule.findUnique({
                where: {
                    id: Number(id),
                },
            });
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.classModule.delete({ where: { id: id } });
        });
    }
}
exports.LessonService = LessonService;
