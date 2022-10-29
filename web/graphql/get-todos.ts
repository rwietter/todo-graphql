import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query todos {
    getTodos {
      title
      id
      description
      completed
    }
  }
`;
