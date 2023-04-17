import { gql } from "@apollo/client";
export const GET_ALL_OPETATION = gql`
  query Query {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
