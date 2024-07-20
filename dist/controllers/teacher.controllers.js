var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TeacherService } from "../services/teacher.services.js";
import { teacherCreateSchema } from "../schemas/teacher.schemas.js"; // Supondo que você tenha um esquema para validação
export class TeacherControllers {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Validação de dados
                const validatedData = teacherCreateSchema.parse(req.body);
                const teacherService = new TeacherService();
                const response = yield teacherService.create(validatedData);
                return res.status(201).json(response);
            }
            catch (error) {
                console.error(error);
                return res.status(400).json({ error: "Invalid data" });
            }
        });
        this.getTeachers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const teacherService = new TeacherService();
                const response = yield teacherService.list();
                return res.status(200).json(response);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Internal server error" });
            }
        });
        this.getOneTeacher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const teacherService = new TeacherService();
                const { id } = req.params;
                const response = yield teacherService.listOneTeacher(Number(id));
                return res.status(200).json(response);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    delete(req, res) {
        const teacherService = new TeacherService();
        const { id } = req.params;
        teacherService.delete(Number(id));
        return res.status(204).json();
    }
}
