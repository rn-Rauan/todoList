import React, { createContext, useContext } from "react";
import { ITaskViewModel } from "../models/Entities/ITaskViewModel";
import { TaskRepository } from "../models/repository/TaskRepository";
import { useTaskViewModel } from "../viewmodels/useTaskViewModel";

const TaskContext = createContext<ITaskViewModel | null>(null);

interface TaskProviderProps {
  children: React.ReactNode;
  viewModel: ITaskViewModel; // ← DIP: recebendo a dependência de fora
}

export function TaskProvider({ children }: TaskProviderProps) {
  const repository = new TaskRepository()

  const viewModel = useTaskViewModel(repository)

  return (
    <TaskContext.Provider value={viewModel}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskVM() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskVM deve ser usado dentro de um TaskProvider");
  }

  return context;
}
