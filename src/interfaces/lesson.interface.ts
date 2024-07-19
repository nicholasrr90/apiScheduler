import { z } from "zod";

import { lessonSchema, lessonCreateSchema } from "../schemas/lesson.schemas";

type ILesson = z.infer<typeof lessonSchema>;
type ILessonCreate = z.infer<typeof lessonCreateSchema>;

export type { ILesson,  ILessonCreate};

