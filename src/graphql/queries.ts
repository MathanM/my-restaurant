/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      duration
      description
      tags
      imageUrl
      cuisine
      preparation
      ingredients {
        items {
          id
          RecipeId
          ingredientId
          quantity
          quantityUnit
          quantityInput
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        duration
        description
        tags
        imageUrl
        cuisine
        preparation
        ingredients {
          nextToken
          items {
            id
            RecipeId
            ingredientId
            quantity
            quantityUnit
            createdAt
            updatedAt
            ingredient {
                id
                imageUrl
                name
            }
          }
        }
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      id
      name
      label
      imageUrl
      status
      createdAt
      updatedAt
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        label
        imageUrl
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIngredientAmount = /* GraphQL */ `
  query GetIngredientAmount($id: ID!) {
    getIngredientAmount(id: $id) {
      id
      RecipeId
      ingredientId
      quantity
      quantityUnit
      quantityInput
      ingredient {
        id
        name
        label
        imageUrl
        status
        createdAt
        updatedAt
      }
      recipe {
        id
        name
        duration
        description
        tags
        imageUrl
        cuisine
        preparation
        ingredients {
          nextToken
        }
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listIngredientAmounts = /* GraphQL */ `
  query ListIngredientAmounts(
    $filter: ModelIngredientAmountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredientAmounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        RecipeId
        ingredientId
        quantity
        quantityUnit
        quantityInput
        ingredient {
          id
          name
          label
          imageUrl
          status
          createdAt
          updatedAt
        }
        recipe {
          id
          name
          duration
          description
          tags
          imageUrl
          cuisine
          preparation
          status
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getShop = /* GraphQL */ `
  query GetShop($id: ID!) {
    getShop(id: $id) {
      id
      name
      description
      imageUrl
      status
      createdAt
      updatedAt
    }
  }
`;
export const listShops = /* GraphQL */ `
  query ListShops(
    $filter: ModelShopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        imageUrl
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchRecipes = /* GraphQL */ `
  query SearchRecipes(
    $filter: SearchableRecipeFilterInput
    $sort: SearchableRecipeSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchRecipes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        duration
        description
        tags
        imageUrl
        cuisine
        preparation
        ingredients {
          nextToken
        }
        status
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchIngredients = /* GraphQL */ `
  query SearchIngredients(
    $filter: SearchableIngredientFilterInput
    $sort: SearchableIngredientSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchIngredients(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        imageUrl
        status
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
