import React from "react";
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useTaskVM } from "../contexts/TaskContext";

export default function TaskListScreen({ navigation }: any) {
  const { tasks, removeTask } = useTaskVM();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TaskDetail", {
                task: item,
                index,
              })
            }
          >
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <Button
        title="Criar nova tarefa"
        onPress={() => navigation.navigate("CreateTask")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
