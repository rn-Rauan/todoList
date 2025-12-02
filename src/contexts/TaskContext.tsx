import React, { createContext, useContext } from "react";
import { ITaskViewModel } from "../viewmodels/ITaskViewModel";

const TaskContext = createContext<ITaskViewModel | null>(null);

interface TaskProviderProps {
  children: React.ReactNode;
  viewModel: ITaskViewModel; // ← DIP: recebendo a dependência de fora
}

export function TaskProvider({ children, viewModel }: TaskProviderProps) {
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
