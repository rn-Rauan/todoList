import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

type Tarefa = {
  title: string;
  description: string;
};


export default function TaskListScreen({ navigation }: any) {
  const [tarefas , setTarefas] = useState<Tarefa[]>([]);

  function adicionarTarefa(novaTarefa: Tarefa) {
        const copia = [...tarefas];

        copia.push(novaTarefa);

        setTarefas(copia);
    }


  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TaskDetail', {
                task: item,
                setTasks: setTarefas,
                index: index,
              })
            }
          >
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <Button
        title="Criar nova tarefa"
        onPress={() => navigation.navigate('CreateTask', { addTask: adicionarTarefa })}
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
    borderBottomColor: '#ccc',
  },
});
