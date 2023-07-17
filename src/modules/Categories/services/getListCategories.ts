export type Category = {
  id: string;
  name: string;
  color: string;
};
import { gql } from "graphql-request";
import { graphqlClient } from "../../../services/graphqlClient";

const query = gql`
  query ListCategories {
    listCategories {
      color
      id
      name
    }
  }
`;

export async function getListCategories() {
  const { listCategories } = await graphqlClient.request<{
    listCategories: Category[];
  }>(query);

  return listCategories;
}
