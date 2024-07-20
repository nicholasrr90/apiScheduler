import { z } from "zod";
const studentSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(3),
});
const studentCreateSchema = studentSchema.omit({ id: true });
export { studentSchema, studentCreateSchema };
