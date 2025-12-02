import React from "react";
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { useTaskVM } from "../contexts/TaskContext";

export default function TaskListScreen({ navigation }: any) {
  const { tasks } = useTaskVM();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("TaskDetail", {
                task: item,
                index,
              })
            }
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Botão flutuante estilo MD3 */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("CreateTask")}
      >
        <Text style={styles.fabPlus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F5FF", // fundo claro estilo Material 3
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,

    // Sombras estilo Material 3
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1D1B20",
  },

  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#6750A4", // roxo Material 3 padrão
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },

  fabPlus: {
    fontSize: 32,
    color: "#FFF",
    marginBottom: 2,
  },
});
