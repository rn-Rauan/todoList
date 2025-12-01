import React, { createContext, useContext } from "react";
import { useTaskViewModel } from "../viewmodels/TaskViewModel";

const TaskContext = createContext<any>(null);

export function TaskProvider({ children }: any) {
  const taskVM = useTaskViewModel();
  return <TaskContext.Provider value={taskVM}>{children}</TaskContext.Provider>;
}

export function useTaskVM() {
  return useContext(TaskContext);
}
