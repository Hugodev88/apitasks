import { Router } from "express";
import { createTask, deleteTask, getTasks, updateTask, toggleTaskDone,} from "../controllers/tasks.controller";

export const tasksRoutes = Router();

tasksRoutes.get("/", getTasks);
tasksRoutes.post("/", createTask);
tasksRoutes.put("/:id", updateTask);
tasksRoutes.patch("/:id/done", toggleTaskDone);
tasksRoutes.delete("/:id", deleteTask);