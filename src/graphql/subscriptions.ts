/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
      id
      name
      imageUrl
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
      id
      name
      imageUrl
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
      id
      name
      imageUrl
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIngredientAmount = /* GraphQL */ `
  subscription OnCreateIngredientAmount {
    onCreateIngredientAmount {
      id
      RecipeId
      ingredientId
      quantity
      quantityUnit
      quantityInput
      ingredient {
        id
        name
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
export const onUpdateIngredientAmount = /* GraphQL */ `
  subscription OnUpdateIngredientAmount {
    onUpdateIngredientAmount {
      id
      RecipeId
      ingredientId
      quantity
      quantityUnit
      quantityInput
      ingredient {
        id
        name
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
export const onDeleteIngredientAmount = /* GraphQL */ `
  subscription OnDeleteIngredientAmount {
    onDeleteIngredientAmount {
      id
      RecipeId
      ingredientId
      quantity
      quantityUnit
      quantityInput
      ingredient {
        id
        name
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
export const onCreateShop = /* GraphQL */ `
  subscription OnCreateShop {
    onCreateShop {
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
export const onUpdateShop = /* GraphQL */ `
  subscription OnUpdateShop {
    onUpdateShop {
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
export const onDeleteShop = /* GraphQL */ `
  subscription OnDeleteShop {
    onDeleteShop {
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
