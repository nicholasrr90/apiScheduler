import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { teacherRoutes } from "../src/routes/teacher.routes";
import { studentRoutes } from "../src/routes/student.routes";
import { lessonRoutes } from "../src/routes/lesson.routes";
import helmet from "helmet";
import morgan from "morgan";
import winston from "winston";
import {createLogger} from "../src/utils/logger"
import {errorHandler} from "../src/middlewares/errorHandler"

import expressWinston from "express-winston";

const logger = createLogger("api-service");


// Configurações de ambiente
const app = express();
const port = process.env.PORT || 3000;

// Middleware para segurança
app.use(helmet());

// Middleware para CORS
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Middleware de logging
app.use(morgan('combined'));


if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

app.use(expressWinston.logger({
  winstonInstance: logger,
}));

// Rotas
app.use("/teacher", teacherRoutes);
app.use("/student", studentRoutes);
app.use("/lesson", lessonRoutes);

// Adiciona o middleware de tratamento de erros no final da cadeia de middlewares
app.use(errorHandler);


// Inicialização do servidor
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

export default app;
