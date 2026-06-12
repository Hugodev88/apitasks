import { Request, Response } from "express";
import { prisma } from "../prisma/client";

// GET
export const getTasks = async (_: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
};

// POST
export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;

  const task = await prisma.task.create({
    data: { title },
  });

  res.status(201).json(task);
};

// PUT (editar título)
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const { title } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id },
      data: { title },
    });

    res.json(task);
  } catch {
    res.status(404).json({ error: "Task not found" });
  }
};

// PATCH done
export const toggleTaskDone = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  try {
    const task = await prisma.task.findUnique({ where: { id } });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const updated = await prisma.task.update({
      where: { id },
      data: { done: !task.done },
    });

    res.json(updated);
  } catch {
    res.status(500).json({ error: "Error updating task" });
  }
};

// DELETE
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  try {
    await prisma.task.delete({
      where: { id },
    });

    res.status(204).send();
  } catch {
    res.status(404).json({ error: "Task not found" });
  }
};