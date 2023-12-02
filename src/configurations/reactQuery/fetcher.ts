import { GraphQLClient, Variables } from 'graphql-request';

import { sessionManager } from '../sessionManager';

async function getAccessTokenSilently() {
  return sessionManager.getToken();
}

async function requestMiddleware(request: RequestInit): Promise<RequestInit> {
  const token = await getAccessTokenSilently();

  return {
    ...request,
    headers: {
      ...request.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
}

async function responseMiddleware(response: Response): Promise<Response> {
  const isUnauthenticated = JSON.stringify(response).includes(
    'Access denied! You need to be authenticated to perform this action!',
  );

  if (isUnauthenticated) {
    sessionManager.logout();
    window.location.href = '/auth/login';
  }

  return response;
}

export const graphQLClient = new GraphQLClient(
  'https://finance-api-jkexq.ondigitalocean.app/graphql',
  {
    requestMiddleware: requestMiddleware as any,
    responseMiddleware: responseMiddleware as any,
  },
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
