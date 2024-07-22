import express from "express";
import cors from "cors";
import { teacherRoutes } from "../src/routes/teacher.routes";
import { studentRoutes } from "../src/routes/student.routes";
import { lessonRoutes } from "../src/routes/lesson.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Definir rotas
app.get("/", (req, res) => {
  res.send({ message: "DEU CERTO CARAIO!" });
});

app.use("/", teacherRoutes);
app.use("/", studentRoutes);
app.use("/", lessonRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
