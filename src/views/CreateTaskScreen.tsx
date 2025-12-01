import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useTaskVM } from "../contexts/TaskContext";

export default function CreateTaskScreen({ navigation }: any) {
  const { addTask } = useTaskVM();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function salvar() {
    if (title.trim().length === 0) return;

    addTask({
      id: String(Date.now()),
      title,
      description,
    });

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Descrição"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Salvar" onPress={salvar} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
