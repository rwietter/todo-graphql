import { todos } from "../../../data/todo";

export const updateTodo = (parent: any, args: any) => {
  console.log(todos);
  todos.forEach(todo => {
    if(todo.id === args.id){
      todo.title = args.title
      todo.description = args.description
      todo.completed = args.completed
    }
  })
  console.log(todos);
  return todos;
};
