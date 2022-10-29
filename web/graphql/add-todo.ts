import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation AddTodo(
    $title: String!
    $description: String!
    $completed: Boolean!
  ) {
    addTodo(title: $title, description: $description, completed: $completed) {
      id
      title
      description
      completed
    }
  }
`;
