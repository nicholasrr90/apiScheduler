import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import {createLogger} from "../utils/logger"; // Supondo que você tenha um logger configurado

const logger = createLogger("errorHandle")

// Middleware de tratamento de erros
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err); // Registra o erro usando o logger

  // Erros de validação do Zod
  if (err instanceof ZodError) {
    return res.status(400).json({
      type: "ZodError",
      errors: err.errors
    });
  }

  // Erros do Prisma
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return res.status(500).json({
      type: "PrismaClientKnownRequestError",
      message: err.message,
      code: err.code
    });
  }

  // Outros erros do Prisma
  if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({
      type: "PrismaClientValidationError",
      message: err.message
    });
  }

  // Erros genéricos
  return res.status(500).json({
    type: "InternalServerError",
    message: err.message || "Internal server error"
  });
};

