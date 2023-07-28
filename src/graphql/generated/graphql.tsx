import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { fetcherWithGraphQLClient } from '@/configurations/reactQuery/fetcher';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Bank = {
  __typename?: 'Bank';
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CreateCategoryInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateCreditCardInput = {
  bankId: Scalars['String']['input'];
  closingDay: Scalars['Float']['input'];
  dueDay: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreditCard = {
  __typename?: 'CreditCard';
  bank: Bank;
  bankId: Scalars['String']['output'];
  closingDay: Scalars['Float']['output'];
  dueDay: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  limit: Scalars['Float']['output'];
  limitAvailable: Scalars['Float']['output'];
  limitUsed: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  percentLimitUsed: Scalars['Float']['output'];
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createCreditCard: CreditCard;
  createUser: User;
  deleteCategory: Scalars['Boolean']['output'];
  updateCategory: Category;
};

export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput;
};

export type MutationCreateCreditCardArgs = {
  data: CreateCreditCardInput;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};

export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryInput;
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  listBanks: Array<Bank>;
  listCategories: Array<Category>;
  listCreditCards: Array<CreditCard>;
};

export type UpdateCategoryInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateCategoryMutationVariables = Exact<{
  data: CreateCategoryInput;
}>;

export type CreateCategoryMutation = {
  __typename?: 'Mutation';
  createCategory: { __typename?: 'Category'; id: string };
};

export type DeleteCategoryMutationVariables = Exact<{
  deleteCategoryId: Scalars['String']['input'];
}>;

export type DeleteCategoryMutation = {
  __typename?: 'Mutation';
  deleteCategory: boolean;
};

export type ListCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type ListCategoriesQuery = {
  __typename?: 'Query';
  listCategories: Array<{
    __typename?: 'Category';
    color: string;
    id: string;
    name: string;
    userId: string;
  }>;
};

export type UpdateCategoryMutationVariables = Exact<{
  data: UpdateCategoryInput;
  updateCategoryId: Scalars['String']['input'];
}>;

export type UpdateCategoryMutation = {
  __typename?: 'Mutation';
  updateCategory: { __typename?: 'Category'; id: string };
};

export type CreateCreditCardMutationVariables = Exact<{
  data: CreateCreditCardInput;
}>;

export type CreateCreditCardMutation = {
  __typename?: 'Mutation';
  createCreditCard: { __typename?: 'CreditCard'; id: string };
};

export type ListBanksQueryVariables = Exact<{ [key: string]: never }>;

export type ListBanksQuery = {
  __typename?: 'Query';
  listBanks: Array<{
    __typename?: 'Bank';
    name: string;
    image: string;
    id: string;
    color: string;
  }>;
};

export type ListCreditCardsQueryVariables = Exact<{ [key: string]: never }>;

export type ListCreditCardsQuery = {
  __typename?: 'Query';
  listCreditCards: Array<{
    __typename?: 'CreditCard';
    percentLimitUsed: number;
    name: string;
    limitUsed: number;
    limitAvailable: number;
    limit: number;
    id: string;
    dueDay: number;
    closingDay: number;
    bankId: string;
    bank: {
      __typename?: 'Bank';
      name: string;
      image: string;
      id: string;
      color: string;
    };
  }>;
};

export const CreateCategoryDocument = `
    mutation CreateCategory($data: CreateCategoryInput!) {
  createCategory(data: $data) {
    id
  }
}
    `;
export const useCreateCategoryMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateCategoryMutation,
    TError,
    CreateCategoryMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateCategoryMutation,
    TError,
    CreateCategoryMutationVariables,
    TContext
  >(
    ['CreateCategory'],
    (variables?: CreateCategoryMutationVariables) =>
      fetcherWithGraphQLClient<
        CreateCategoryMutation,
        CreateCategoryMutationVariables
      >(CreateCategoryDocument, variables)(),
    options,
  );
useCreateCategoryMutation.getKey = () => ['CreateCategory'];

export const DeleteCategoryDocument = `
    mutation deleteCategory($deleteCategoryId: String!) {
  deleteCategory(id: $deleteCategoryId)
}
    `;
export const useDeleteCategoryMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteCategoryMutation,
    TError,
    DeleteCategoryMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteCategoryMutation,
    TError,
    DeleteCategoryMutationVariables,
    TContext
  >(
    ['deleteCategory'],
    (variables?: DeleteCategoryMutationVariables) =>
      fetcherWithGraphQLClient<
        DeleteCategoryMutation,
        DeleteCategoryMutationVariables
      >(DeleteCategoryDocument, variables)(),
    options,
  );
useDeleteCategoryMutation.getKey = () => ['deleteCategory'];

export const ListCategoriesDocument = `
    query ListCategories {
  listCategories {
    color
    id
    name
    userId
  }
}
    `;
export const useListCategoriesQuery = <
  TData = ListCategoriesQuery,
  TError = unknown,
>(
  variables?: ListCategoriesQueryVariables,
  options?: UseQueryOptions<ListCategoriesQuery, TError, TData>,
) =>
  useQuery<ListCategoriesQuery, TError, TData>(
    variables === undefined
      ? ['ListCategories']
      : ['ListCategories', variables],
    fetcherWithGraphQLClient<ListCategoriesQuery, ListCategoriesQueryVariables>(
      ListCategoriesDocument,
      variables,
    ),
    options,
  );

useListCategoriesQuery.getKey = (variables?: ListCategoriesQueryVariables) =>
  variables === undefined ? ['ListCategories'] : ['ListCategories', variables];
export const UpdateCategoryDocument = `
    mutation UpdateCategory($data: UpdateCategoryInput!, $updateCategoryId: String!) {
  updateCategory(data: $data, id: $updateCategoryId) {
    id
  }
}
    `;
export const useUpdateCategoryMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateCategoryMutation,
    TError,
    UpdateCategoryMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateCategoryMutation,
    TError,
    UpdateCategoryMutationVariables,
    TContext
  >(
    ['UpdateCategory'],
    (variables?: UpdateCategoryMutationVariables) =>
      fetcherWithGraphQLClient<
        UpdateCategoryMutation,
        UpdateCategoryMutationVariables
      >(UpdateCategoryDocument, variables)(),
    options,
  );
useUpdateCategoryMutation.getKey = () => ['UpdateCategory'];

export const CreateCreditCardDocument = `
    mutation CreateCreditCard($data: CreateCreditCardInput!) {
  createCreditCard(data: $data) {
    id
  }
}
    `;
export const useCreateCreditCardMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CreateCreditCardMutation,
    TError,
    CreateCreditCardMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateCreditCardMutation,
    TError,
    CreateCreditCardMutationVariables,
    TContext
  >(
    ['CreateCreditCard'],
    (variables?: CreateCreditCardMutationVariables) =>
      fetcherWithGraphQLClient<
        CreateCreditCardMutation,
        CreateCreditCardMutationVariables
      >(CreateCreditCardDocument, variables)(),
    options,
  );
useCreateCreditCardMutation.getKey = () => ['CreateCreditCard'];

export const ListBanksDocument = `
    query ListBanks {
  listBanks {
    name
    image
    id
    color
  }
}
    `;
export const useListBanksQuery = <TData = ListBanksQuery, TError = unknown>(
  variables?: ListBanksQueryVariables,
  options?: UseQueryOptions<ListBanksQuery, TError, TData>,
) =>
  useQuery<ListBanksQuery, TError, TData>(
    variables === undefined ? ['ListBanks'] : ['ListBanks', variables],
    fetcherWithGraphQLClient<ListBanksQuery, ListBanksQueryVariables>(
      ListBanksDocument,
      variables,
    ),
    options,
  );

useListBanksQuery.getKey = (variables?: ListBanksQueryVariables) =>
  variables === undefined ? ['ListBanks'] : ['ListBanks', variables];
export const ListCreditCardsDocument = `
    query ListCreditCards {
  listCreditCards {
    percentLimitUsed
    name
    limitUsed
    limitAvailable
    limit
    id
    dueDay
    closingDay
    bankId
    bank {
      name
      image
      id
      color
    }
  }
}
    `;
export const useListCreditCardsQuery = <
  TData = ListCreditCardsQuery,
  TError = unknown,
>(
  variables?: ListCreditCardsQueryVariables,
  options?: UseQueryOptions<ListCreditCardsQuery, TError, TData>,
) =>
  useQuery<ListCreditCardsQuery, TError, TData>(
    variables === undefined
      ? ['ListCreditCards']
      : ['ListCreditCards', variables],
    fetcherWithGraphQLClient<
      ListCreditCardsQuery,
      ListCreditCardsQueryVariables
    >(ListCreditCardsDocument, variables),
    options,
  );

useListCreditCardsQuery.getKey = (variables?: ListCreditCardsQueryVariables) =>
  variables === undefined
    ? ['ListCreditCards']
    : ['ListCreditCards', variables];
