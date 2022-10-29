import { gql } from "@apollo/client";

export const EDIT_TODO = gql`
  mutation UpdateTodo(
    $id: String!
    $title: String!
    $description: String!
    $completed: Boolean!
  ) {
    updateTodo(
      id: $id
      title: $title
      description: $description
      completed: $completed
    ) {
      title
      description
      id
      completed
    }
  }
`;
