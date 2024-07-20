import { z } from "zod";
import { lessonCreateSchema, lessonSchema } from "../schemas/lesson.schemas";

type ILesson = z.infer<typeof lessonSchema>;
type ILessonCreate = {
    name: string
}

export type { ILesson, ILessonCreate };
