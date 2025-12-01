import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTaskVM } from "../contexts/TaskContext";

export default function TaskDetailScreen({ route, navigation }: any) {
  const { task, index } = route.params;
  const { removeTask } = useTaskVM();

  function excluir() {
    removeTask(index);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{task.title}</Text>
      <Text style={styles.descricao}>{task.description}</Text>

      <Button title="Excluir" color="red" onPress={excluir} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 20,
  },
});
