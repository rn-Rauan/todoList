import { ITask } from "./ITask";

export interface ITaskRepository {
  getAll(): ITask[];
  add(task: ITask): void;
  remove(index: number): void;
}
