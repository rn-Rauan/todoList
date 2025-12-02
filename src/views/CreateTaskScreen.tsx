import React, { useState } from "react";
import { 
  View, 
  TextInput, 
  TouchableOpacity,
  Text,
  StyleSheet 
} from "react-native";
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
        placeholderTextColor="#6D6A75"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Descrição"
        style={[styles.input, styles.inputMultiline]}
        placeholderTextColor="#6D6A75"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Botão salvar */}
      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      {/* Botão voltar */}
      <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonSecondaryText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F5FF", // Fundo Material 3
  },

  input: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    fontSize: 16,
    color: "#1D1B20",

    // Sombras estilo Material 3
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.10,
    shadowRadius: 3,
    elevation: 2,

    marginBottom: 14,
  },

  inputMultiline: {
    height: 120,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: "#6750A4",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },

  buttonSecondary: {
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#6750A4",
  },

  buttonSecondaryText: {
    color: "#6750A4",
    fontSize: 16,
    fontWeight: "600",
  },
});
