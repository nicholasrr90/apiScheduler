import { z } from "zod";
const teacherSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(3),
    schedule: z.array(z.boolean()),
});
const teacherCreateSchema = teacherSchema.omit({ id: true });
export { teacherSchema, teacherCreateSchema };
