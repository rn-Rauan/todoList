import { useState } from "react";
import { Task } from "../models/Task";
import { TaskService } from "../services/TaskService";
import { ITaskViewModel } from "./ITaskViewModel";

export function useTaskViewModel(): ITaskViewModel {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(task: Task) {
    setTasks(prev => TaskService.add(prev, task));
  }

  function removeTask(index: number) {
    setTasks(prev => TaskService.remove(prev, index));
  }

  return {
    tasks,
    addTask,
    removeTask,
  };
}
