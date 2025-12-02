import { TaskRepository } from "../repository/TaskRepository";
import { ITask } from "../Entities/ITask";

describe('TaskRepository', () => {
  let repository: TaskRepository;

  beforeEach(() => {
    repository = new TaskRepository();
  });

  it('deve iniciar com uma lista de tarefas vazia', () => {
    expect(repository.getAll()).toEqual([]);
  });

  it('deve adicionar uma tarefa à lista', () => {
    const task: ITask = { id: '1', title: 'Tarefa de Teste', description: 'Descrição de Teste' };
    repository.add(task);
    expect(repository.getAll()).toEqual([task]);
  });

  it('deve adicionar múltiplas tarefas à lista', () => {
    const task1: ITask = { id: '1', title: 'Tarefa 1', description: 'Desc 1' };
    const task2: ITask = { id: '2', title: 'Tarefa 2', description: 'Desc 2' };
    repository.add(task1);
    repository.add(task2);
    expect(repository.getAll()).toEqual([task1, task2]);
  });

  it('deve remover uma tarefa da lista pelo seu índice', () => {
    const task1: ITask = { id: '1', title: 'Tarefa 1', description: 'Desc 1' };
    const task2: ITask = { id: '2', title: 'Tarefa 2', description: 'Desc 2' };
    repository.add(task1);
    repository.add(task2);

    repository.remove(0);
    expect(repository.getAll()).toEqual([task2]);
  });

  it('não deve falhar ao tentar remover de uma lista vazia', () => {
    expect(() => repository.remove(0)).not.toThrow();
  });

  it('deve lidar com a remoção de um índice que não existe', () => {
    const task: ITask = { id: '1', title: 'Tarefa de Teste', description: 'Descrição de Teste' };
    repository.add(task);
    repository.remove(5); 
    expect(repository.getAll()).toEqual([task]);
  });
});