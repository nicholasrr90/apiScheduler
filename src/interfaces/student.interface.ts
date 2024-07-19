import { z } from "zod";

import { studentSchema, studentCreateSchema } from "../schemas/student.schemas";

type IStudent = z.infer<typeof studentSchema>;
type IStudentCreate = z.infer<typeof studentCreateSchema>;

export type { IStudent,  IStudentCreate};

