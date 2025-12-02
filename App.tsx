import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TaskProvider } from "./src/contexts/TaskContext";
import { useTaskViewModel } from "./src/viewmodels/TaskViewModel";

import TaskListScreen from "./src/views/TaskListScreen";
import TaskDetailScreen from "./src/views/TaskDetailScreen";
import CreateTaskScreen from "./src/views/CreateTaskScreen";

const Stack = createStackNavigator();

export default function App() {
  // Instância concreta do ViewModel (injeção de dependência)
  const taskVM = useTaskViewModel();

  return (
    <TaskProvider viewModel={taskVM} children={undefined}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TaskList"
            component={TaskListScreen}
            options={{ title: "Tarefas" }}
          />
          <Stack.Screen
            name="TaskDetail"
            component={TaskDetailScreen}
            options={{ title: "Detalhes" }}
          />
          <Stack.Screen
            name="CreateTask"
            component={CreateTaskScreen}
            options={{ title: "Criar tarefa" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
