import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  "https://finance-api-dev-aqke.onrender.com/graphql"
);
