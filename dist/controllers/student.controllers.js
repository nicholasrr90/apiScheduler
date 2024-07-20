var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { StudentService } from "../services/student.services.js";
import { studentCreateSchema } from "../schemas/student.schemas.js"; // Supondo que você tenha um esquema para validação
export class StudentControllers {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validatedData = studentCreateSchema.parse(req.body);
                const studentService = new StudentService();
                const response = yield studentService.create(validatedData);
                return res.status(201).json(response);
            }
            catch (error) {
                console.error(error);
                return res.status(400).json({ error: "Invalid data" });
            }
        });
        this.getStudents = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const studentService = new StudentService();
                const response = yield studentService.list();
                return res.status(200).json(response);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Internal server error" });
            }
        });
        this.getOneStudent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const studentService = new StudentService();
                const { id } = req.params;
                const response = yield studentService.listOneStudent(Number(id));
                return res.status(200).json(response);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    delete(req, res) {
        const studentService = new StudentService();
        const { id } = req.params;
        studentService.delete(Number(id));
        return res.status(204).json();
    }
}
