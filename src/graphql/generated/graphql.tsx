import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { fetcherWithGraphQLClient } from '../../configurations/reactQuery/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateCategoryInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  deleteCategory: Scalars['Boolean']['output'];
  updateCategory: Category;
};


export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CreateCategoryInput;
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  listCategories: Array<Category>;
};

export type CreateCategoryMutationVariables = Exact<{
  data: CreateCategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'Category', id: string } };

export type ListCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCategoriesQuery = { __typename?: 'Query', listCategories: Array<{ __typename?: 'Category', color: string, id: string, name: string }> };


export const CreateCategoryDocument = `
    mutation CreateCategory($data: CreateCategoryInput!) {
  createCategory(data: $data) {
    id
  }
}
    `;
export const useCreateCategoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateCategoryMutation, TError, CreateCategoryMutationVariables, TContext>) =>
    useMutation<CreateCategoryMutation, TError, CreateCategoryMutationVariables, TContext>(
      ['CreateCategory'],
      (variables?: CreateCategoryMutationVariables) => fetcherWithGraphQLClient<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, variables)(),
      options
    );
useCreateCategoryMutation.getKey = () => ['CreateCategory'];

export const ListCategoriesDocument = `
    query ListCategories {
  listCategories {
    color
    id
    name
  }
}
    `;
export const useListCategoriesQuery = <
      TData = ListCategoriesQuery,
      TError = unknown
    >(
      variables?: ListCategoriesQueryVariables,
      options?: UseQueryOptions<ListCategoriesQuery, TError, TData>
    ) =>
    useQuery<ListCategoriesQuery, TError, TData>(
      variables === undefined ? ['ListCategories'] : ['ListCategories', variables],
      fetcherWithGraphQLClient<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, variables),
      options
    );

useListCategoriesQuery.getKey = (variables?: ListCategoriesQueryVariables) => variables === undefined ? ['ListCategories'] : ['ListCategories', variables];
;
