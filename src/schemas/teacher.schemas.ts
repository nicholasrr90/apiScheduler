import { z } from "zod";

const teacherSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(3, "Name must be at least 3 characters long"),
  schedule: z.array(z.boolean()).nonempty("Schedule must be an array of booleans"),
});

const teacherCreateSchema = teacherSchema.omit({ id: true });

export { teacherSchema, teacherCreateSchema };
