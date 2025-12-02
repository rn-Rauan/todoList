import { TaskService } from "./TaskService";
import { Task } from "../models/Task";

describe("TaskService", () => {

  test("adiciona uma tarefa", () => {
    const lista: Task[] = [];
    const nova: Task = { id: "1", title: "Estudar", description: "IA" };

    const resultado = TaskService.add(lista, nova);

    expect(resultado).toHaveLength(1);
    expect(resultado[0]).toEqual(nova);
  });

  test("remove uma tarefa pelo índice", () => {
    const lista: Task[] = [
      { id: "1", title: "A", description: "A" },
      { id: "2", title: "B", description: "B" }
    ];

    const resultado = TaskService.remove(lista, 0);

    expect(resultado).toHaveLength(1);
    expect(resultado[0].id).toBe("2");
  });
});
