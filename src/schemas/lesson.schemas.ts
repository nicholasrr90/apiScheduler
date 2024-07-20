import { z } from "zod";

const lessonSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(3),
});

const lessonCreateSchema = z.object({
    name: z.string().min(3).nonempty(),
});

export { lessonSchema, lessonCreateSchema };
