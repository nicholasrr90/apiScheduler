"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherCreateSchema = exports.teacherSchema = void 0;
const zod_1 = require("zod");
const teacherSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    name: zod_1.z.string().min(3),
    schedule: zod_1.z.array(zod_1.z.boolean()),
});
exports.teacherSchema = teacherSchema;
const teacherCreateSchema = teacherSchema.omit({ id: true });
exports.teacherCreateSchema = teacherCreateSchema;
