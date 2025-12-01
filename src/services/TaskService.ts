import { Task } from "../models/Task";

export const TaskService = {
  add(tasks: Task[], task: Task): Task[] {
    return [...tasks, task];
  },

  remove(tasks: Task[], index: number): Task[] {
    return tasks.filter((_, i) => i !== index);
  }
};
