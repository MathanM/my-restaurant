/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const batchAddIngredientAmount = /* GraphQL */ `
  mutation BatchAddIngredientAmount(
    $ingredientAmounts: [CreateIngredientAmountInput]
  ) {
    batchAddIngredientAmount(ingredientAmounts: $ingredientAmounts) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
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
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
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
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
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
export const createIngredientAmount = /* GraphQL */ `
  mutation CreateIngredientAmount(
    $input: CreateIngredientAmountInput!
    $condition: ModelIngredientAmountConditionInput
  ) {
    createIngredientAmount(input: $input, condition: $condition) {
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
export const updateIngredientAmount = /* GraphQL */ `
  mutation UpdateIngredientAmount(
    $input: UpdateIngredientAmountInput!
    $condition: ModelIngredientAmountConditionInput
  ) {
    updateIngredientAmount(input: $input, condition: $condition) {
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
export const deleteIngredientAmount = /* GraphQL */ `
  mutation DeleteIngredientAmount(
    $input: DeleteIngredientAmountInput!
    $condition: ModelIngredientAmountConditionInput
  ) {
    deleteIngredientAmount(input: $input, condition: $condition) {
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
export const createShop = /* GraphQL */ `
  mutation CreateShop(
    $input: CreateShopInput!
    $condition: ModelShopConditionInput
  ) {
    createShop(input: $input, condition: $condition) {
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
export const updateShop = /* GraphQL */ `
  mutation UpdateShop(
    $input: UpdateShopInput!
    $condition: ModelShopConditionInput
  ) {
    updateShop(input: $input, condition: $condition) {
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
export const deleteShop = /* GraphQL */ `
  mutation DeleteShop(
    $input: DeleteShopInput!
    $condition: ModelShopConditionInput
  ) {
    deleteShop(input: $input, condition: $condition) {
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
