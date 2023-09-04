import { GraphQLClient, Variables } from 'graphql-request';

export const graphQLClient = new GraphQLClient(
  'https://finance-api-jkexq.ondigitalocean.app/graphql',
);

export const fetcherWithGraphQLClient = <
  TData = any,
  TVariables extends Variables = any,
>(
  query: string,
  variables?: TVariables,
): (() => Promise<TData>) => {
  return async () => {
    return graphQLClient.request<TData>(query, variables);
  };
};
