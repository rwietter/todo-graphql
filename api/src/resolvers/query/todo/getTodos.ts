import { todos } from "../../../data/todo"
import { Todos } from "../../../types/todo"

export const getTodos = (): Todos => {
    return todos
}