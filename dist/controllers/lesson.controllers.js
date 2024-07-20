import { LessonService } from "../services/lesson.services";
import { lessonCreateSchema } from "../schemas/lesson.schemas"; // Supondo que você tenha um esquema para validação
export class LessonControllers {
    create = async (req, res) => {
        try {
            const validatedData = lessonCreateSchema.parse(req.body);
            const lessonService = new LessonService();
            const response = await lessonService.create(validatedData);
            return res.status(201).json(response);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json({ error: "Invalid data" });
        }
    };
    getLessons = async (req, res) => {
        try {
            const lessonService = new LessonService();
            const response = await lessonService.list();
            return res.status(200).json(response);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };
    getOneLesson = async (req, res) => {
        try {
            const lessonService = new LessonService();
            const { id } = req.params;
            const response = await lessonService.listOneLesson(Number(id));
            return res.status(200).json(response);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };
    delete(req, res) {
        const lessonService = new LessonService();
        const { id } = req.params;
        lessonService.delete(Number(id));
        return res.status(204).json();
    }
}
