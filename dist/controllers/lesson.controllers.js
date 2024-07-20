var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LessonService } from "../services/lesson.services.js";
import { lessonCreateSchema } from "../schemas/lesson.schemas.js"; // Supondo que você tenha um esquema para validação
export class LessonControllers {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validatedData = lessonCreateSchema.parse(req.body);
                const lessonService = new LessonService();
                const response = yield lessonService.create(validatedData);
                return res.status(201).json(response);
            }
            catch (error) {
                console.error(error);
                return res.status(400).json({ error: "Invalid data" });
            }
        });
        this.getLessons = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const lessonService = new LessonService();
                const response = yield lessonService.list();
                return res.status(200).json(response);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Internal server error" });
            }
        });
        this.getOneLesson = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const lessonService = new LessonService();
                const { id } = req.params;
                const response = yield lessonService.listOneLesson(Number(id));
                return res.status(200).json(response);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    delete(req, res) {
        const lessonService = new LessonService();
        const { id } = req.params;
        lessonService.delete(Number(id));
        return res.status(204).json();
    }
}
