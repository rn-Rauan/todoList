import { Task } from "./Task";

export interface ITaskService{
    add(tasks: Task[], task: Task): Task[];
    remove(tasks: Task[], index: number): Task[];
}