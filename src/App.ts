import express, { json } from "express";
import { teacherRoutes } from "./routes/teacher.routes";

import dotenv from 'dotenv';
dotenv.config();



export const app = express();

const cors = require('cors');


app.use(cors());

app.use(json());
app.use("/", teacherRoutes);