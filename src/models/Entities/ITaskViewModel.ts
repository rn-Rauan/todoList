import { ITask } from "./ITask";

export interface ITaskViewModel {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (index: number) => void;
}
