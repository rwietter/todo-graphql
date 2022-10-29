import { gql } from "apollo-server";

const typeDefs = gql`
  type Todo {
    id: String
    title: String
    description: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    addTodo(title: String!, description: String!, completed: Boolean!): [Todo]
    deleteTodo(id: String!): [Todo]
    updateTodo(id: String!, title: String, description: String, completed: Boolean): [Todo]
  }
`;

export { typeDefs };
