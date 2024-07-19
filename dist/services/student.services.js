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
exports.StudentService = void 0;
const prisma_1 = require("../database/prisma");
const student_schemas_1 = require("../schemas/student.schemas");
class StudentService {
    constructor() {
        this.create = (payload) => __awaiter(this, void 0, void 0, function* () {
            const newStudent = yield prisma_1.prisma.student.create({ data: payload });
            return student_schemas_1.studentSchema.parse(newStudent);
        });
        this.list = () => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.student.findMany();
        });
        this.listOneStudent = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.student.findUnique({
                where: {
                    id: Number(id),
                },
            });
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.student.delete({ where: { id: id } });
        });
    }
}
exports.StudentService = StudentService;
