import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
      <View style={styles.card}>
        <Text style={styles.titulo}>{task.title}</Text>
        <Text style={styles.descricao}>
          {task.description || "Nenhuma descrição adicionada."}
        </Text>
      </View>

      {/* Botão excluir */}
      <TouchableOpacity style={styles.btnExcluir} onPress={excluir}>
        <Text style={styles.btnExcluirText}>Excluir</Text>
      </TouchableOpacity>

      {/* Botão voltar */}
      <TouchableOpacity
        style={styles.btnVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.btnVoltarText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F5FF",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1D1B20",
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    color: "#49454F",
    lineHeight: 22,
  },

  btnExcluir: {
    backgroundColor: "#B3261E",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },

  btnExcluirText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },

  btnVoltar: {
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#6750A4",
    alignItems: "center",
  },

  btnVoltarText: {
    color: "#6750A4",
    fontSize: 16,
    fontWeight: "600",
  },
});
