import { todos } from "../../../data/todo";
import { Todos } from "../../../types/todo";

export const deleteTodo = (parent: any, args: any): Todos => {
    todos.forEach(todo => {
        if(todo.id === args.id){
            todos.splice(todos.indexOf(todo), 1)
        }
    })
    return todos;
};