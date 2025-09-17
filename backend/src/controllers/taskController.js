import Task from "../models/Task.js";

async function createTask(req, res){
    try{
        const task = await Task.create({ ...req.body });
     res.status(201).json(task);
    }
    catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export default createTask;