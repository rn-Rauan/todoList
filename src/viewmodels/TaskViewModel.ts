import { useState } from "react";
import { Task } from "../models/Task";
import { TaskService } from "../services/TaskService";

export function useTaskViewModel() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(task: Task) {
    setTasks(prev => TaskService.add(prev, task));
  }

  function removeTask(index: number) {
    setTasks(prev => TaskService.remove(prev, index));
  }

  return { tasks, addTask, removeTask };
}
