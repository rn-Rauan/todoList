import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function CreateTaskScreen({ navigation, route } : any) {
  const { addTask }  = route.params;

  const [titulo, setTitulo] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');

  function adicionarTarefa() {
    if (titulo.trim() != '') {
      addTask({ title: titulo, description: descricao });
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Título da tarefa" value={titulo} onChangeText={setTitulo}/>

      <TextInput style={[styles.input, styles.textarea]} placeholder="Descrição" value={descricao} onChangeText={setDescricao} multiline/>

      <Button title="Adicionar" onPress={adicionarTarefa} />
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
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
