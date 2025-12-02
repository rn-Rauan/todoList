import { Task } from "../models/Task";
import { ITaskService } from "../models/ITaskService";

export const TaskService: ITaskService= {
  add(tasks: Task[], task: Task): Task[] {
    return [...tasks, task];
  },

  remove(tasks: Task[], index: number): Task[] {
    return tasks.filter((_, i) => i != index);
  }

};
