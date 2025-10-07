import { Router } from "express";
import {createTask, getTasks, getTaskById, updateTask, deleteTask} from '../controllers/taskController.js';


const router = Router();

// Create a tasks
router.post("/api/tasks", createTask);

// Show the tasks
router.get("/api/tasks", getTasks);

// Show the specific task
router.get("/api/tasks/:id", getTaskById);

// Update the task
router.put("/api/tasks/:id", updateTask);

// Delete the task
router.delete("/api/tasks/:id", deleteTask);

export default router;