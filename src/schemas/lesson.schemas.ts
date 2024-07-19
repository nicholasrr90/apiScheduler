import { z } from "zod";

const lessonSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(3),
});

const lessonCreateSchema = lessonSchema.omit({ id: true });


export { lessonSchema, lessonCreateSchema };