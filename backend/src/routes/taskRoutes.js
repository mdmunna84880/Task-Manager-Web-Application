import { Router } from "express";
import createTask from '../controllers/taskController.js';


const router = Router();

router.post("/api/tasks", createTask);

export default router;