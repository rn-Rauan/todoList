import { useEffect, useState } from "react";
import { ITask } from "../models/Entities/ITask";
import { TaskRepository } from "../models/repository/TaskRepository";

export interface UseTasksState {
  tasks: ITask[];
  loading: boolean;
  error: string | null;
}

export interface UseTasksActions {
  refresh: () => Promise<void>;
  addTask: (task: ITask) => void;
  removeTask: (index: number) => void;
}

export function useTaskViewModel(
  repository: TaskRepository
): UseTasksState & UseTasksActions {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await repository.getAll();
      setTasks(data);
    } catch (err) {
      setError("Erro ao carregar as tarefas");
    } finally {
      setLoading(false);
    }
  };

  function addTask(task: ITask): void {
    repository.add(task);
    setTasks(prevTasks => [...prevTasks, task]);
  }

  function removeTask(index: number) {
    repository.remove(index);
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    tasks,
    loading,
    error,
    refresh,
    addTask,
    removeTask,
  };
}
