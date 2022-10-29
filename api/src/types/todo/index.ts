interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

type Todos = Todo[];

export { Todo, Todos };