import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: false,
      maxlength: 500,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, strict: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
