import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TaskDetailScreen({ route, navigation }: any ) {
  const { task, setTasks, index } = route.params;

  function excluirTarefa() {
    const novasTarefas :string[] = [];

    setTasks((tarefasAntigas : string) => {
      for (let i = 0; i < tarefasAntigas.length; i++) {
        if (i != index) {
          novasTarefas.push(tarefasAntigas[i]);
        }
      }
      return novasTarefas;
    });

    navigation.goBack();
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{task.title}</Text>
      <Text style={styles.descricao}>{task.description}</Text>

      <Button title="Excluir" color="red" onPress={excluirTarefa} />
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 20,
  },
});
