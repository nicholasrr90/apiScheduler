import { z } from "zod";

import { teacherSchema, teacherCreateSchema } from "../schemas/teacher.schemas";

type ITeacher = z.infer<typeof teacherSchema>;
type ITeacherCreate = {
    name: string
    schedule: []
}

export type { ITeacher,  ITeacherCreate};

