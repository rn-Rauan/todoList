# 📘 ToDoList – App React Native com Expo

## 👥 Integrantes do Grupo

- **Deyvison Samuel Gomes do Nascimento** – IFPI – Matrícula: *2024116TADS0015*
- **Maria Vitória da Silva Araújo** – IFPI – Matrícula: *2024116TADS0037*
- **Maria Yasmin Oliveira Mélo** – IFPI – Matrícula: *2024116TADS0014*
- **Rauan dos Santos Bandeira** – IFPI – Matrícula: *2024116TADS0010*

---

## 📝 Descrição do Projeto

O **ToDoList** é um aplicativo desenvolvido com **Expo**, utilizando **React Native** e **TypeScript**, que permite ao usuário gerenciar uma lista de tarefas.  
As principais funcionalidades incluem:

- Adicionar tarefas  
- Listar tarefas  
- Marcar tarefas como concluídas  
- Remover tarefas  

O projeto foi desenvolvido com foco em arquitetura, boas práticas de organização e aplicação de testes automatizados.

---

## 🏛️ Arquitetura e Padrões Aplicados

### ✔ MVVM (Model–View–ViewModel)

O código foi organizado seguindo a arquitetura **MVVM**, separando claramente responsabilidades:

- **Model**: entidade de tarefa e interfaces de repositório.
- **View**: telas e componentes construídos com React Native e React Navigation.
- **ViewModel**: responsável pela lógica de negócio, manipulação das tarefas e exposição de estado.

Esse padrão garante separação clara entre UI e lógica, maior reaproveitamento e facilidade de testes.

---

### ✔ Inversão de Dependência (DI)

O projeto usa **Inversão de Dependência** para fornecer o repositório de tarefas às ViewModels:

- A ViewModel depende de uma **interface**, não da implementação concreta.
- O repositório em memória é injetado via DI.
- Permite trocar a implementação facilmente, principalmente em testes.

---

### ✔ Armazenamento em Memória

Para simplificar o escopo educacional, o armazenamento das tarefas é feito **em memória**, sem banco de dados ou integração com API.

As operações implementadas incluem:

- `createTask()`
- `getTasks()`
- `toggleTaskDone()`
- `deleteTask()`

---

### ✔ Testes Automatizados

Foram implementados testes automatizados cobrindo:

- **ViewModel** — validação da lógica de negócio.  
- **CRUD de tarefas** — garantindo o comportamento correto das operações.

Os testes utilizam Jest e permitem garantir a estabilidade do código mesmo após futuras alterações.

---

## ▶ Como Executar o Projeto

### 📌 Requisitos

- Node.js instalado
- npm 
- Expo CLI (opcional)

### 📥 Passo a passo para rodar o app

1. Clone o repositório:
   ```bash
   git clone https://github.com/rn-Rauan/todoList
2. Acesse a pasta do projeto:
   ```bash
   cd todoList
3. Instale as dependências:
   ```bash
     npm install
4. Inicie o app com Expo:
    ```bash
     npx expo start
5. Abra o app:
- No celular: usando Expo Go (Android/iOS)
- No computador: usando um emulador Android ou simulador iOS

### 🧪 Como Executar os Testes
1. Na pasta do projeto, execute:
   ```bash
   npm test

