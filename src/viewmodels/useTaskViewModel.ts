import { useState } from "react";
import { Task } from "../models/Task";
import { ITaskViewModel } from "./ITaskViewModel";
import { ITaskService } from "../models/ITaskService";

export function useTaskViewModel(service : ITaskService): ITaskViewModel {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(task: Task) {
    setTasks(prev => service.add(prev, task));
  }

  function removeTask(index: number) {
    setTasks(prev => service.remove(prev, index));
  }

  return {
    tasks,
    addTask,
    removeTask,
  };
}
