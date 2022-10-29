import { todos } from "../../../data/todo";
import { Todo, Todos } from "../../../types/todo";
import { randomUUID } from "node:crypto";

export const addTodo = (parent: any, args: Todo): Todos => {
  todos.push({
    id: randomUUID(),
    title: args.title,
    description: args.description,
    completed: args.completed,
  });
  return todos;
};
