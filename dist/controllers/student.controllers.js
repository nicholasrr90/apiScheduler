import { StudentService } from "../services/student.services";
import { studentCreateSchema } from "../schemas/student.schemas"; // Supondo que você tenha um esquema para validação
export class StudentControllers {
    create = async (req, res) => {
        try {
            const validatedData = studentCreateSchema.parse(req.body);
            const studentService = new StudentService();
            const response = await studentService.create(validatedData);
            return res.status(201).json(response);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json({ error: "Invalid data" });
        }
    };
    getStudents = async (req, res) => {
        try {
            const studentService = new StudentService();
            const response = await studentService.list();
            return res.status(200).json(response);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };
    getOneStudent = async (req, res) => {
        try {
            const studentService = new StudentService();
            const { id } = req.params;
            const response = await studentService.listOneStudent(Number(id));
            return res.status(200).json(response);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };
    delete(req, res) {
        const studentService = new StudentService();
        const { id } = req.params;
        studentService.delete(Number(id));
        return res.status(204).json();
    }
}
