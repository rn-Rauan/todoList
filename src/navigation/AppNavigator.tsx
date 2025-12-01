import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TaskListScreen from "../views/TaskListScreen";
import TaskDetailScreen from "../views/TaskDetailScreen";
import CreateTaskScreen from "../views/CreateTaskScreen";

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TaskList" component={TaskListScreen} />
      <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
      <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
    </Stack.Navigator>
  );
}
