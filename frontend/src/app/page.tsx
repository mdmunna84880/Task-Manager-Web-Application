"use client";

import { useState, useEffect } from "react";
import { Task } from "./types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/tasks");
        if (!res.ok) throw new Error("Failed to fetch tasks");
        const data: Task[] = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6 text-center">Zenith Flow Tasks</h1>
      <ul className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id} className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <h2 className="font-semibold">{task.title}</h2>
              <p className="text-sm text-gray-600">{task.description}</p>
            </li>
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </ul>
    </main>
  );
}
