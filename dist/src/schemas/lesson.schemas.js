"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonCreateSchema = exports.lessonSchema = void 0;
const zod_1 = require("zod");
const lessonSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    name: zod_1.z.string().min(3),
});
exports.lessonSchema = lessonSchema;
const lessonCreateSchema = lessonSchema.omit({ id: true });
exports.lessonCreateSchema = lessonCreateSchema;
