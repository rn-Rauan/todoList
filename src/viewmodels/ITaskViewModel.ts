import { Task } from "../models/Task";

export interface ITaskViewModel {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (index: number) => void;
}
