import { ITask } from "../Entities/ITask";
import { ITaskRepository } from "../Entities/ITaskRepository";

export class TaskRepository implements ITaskRepository{
    private tasks : ITask[] = [];

    getAll(): ITask[] {
        return [...this.tasks];
    }
    add(task: ITask): void {
        this.tasks.push(task)
    }
    remove(index: number): void {
        this.tasks = this.tasks.filter((_, i) => i != index);
    }
}

