import { z } from "zod";

import { teacherSchema, teacherCreateSchema } from "../schemas/teacher.schemas";

type ITeacher = z.infer<typeof teacherSchema>;
type ITeacherCreate = z.infer<typeof teacherCreateSchema>;

export type { ITeacher,  ITeacherCreate};

