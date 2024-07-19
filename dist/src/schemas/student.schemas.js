"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentCreateSchema = exports.studentSchema = void 0;
const zod_1 = require("zod");
const studentSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    name: zod_1.z.string().min(3),
});
exports.studentSchema = studentSchema;
const studentCreateSchema = studentSchema.omit({ id: true });
exports.studentCreateSchema = studentCreateSchema;
