/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIngredientAmountInput = {
  id: string,
  RecipeId: string,
  ingredientId: string,
  quantity?: number | null,
  quantityUnit?: string | null,
  ingredientAmountRecipeId: string,
};

export type IngredientAmount = {
  __typename: "IngredientAmount",
  id?: string,
  RecipeId?: string,
  ingredientId?: string,
  quantity?: number | null,
  quantityUnit?: string | null,
  quantityInput?: string | null,
  ingredient?: Ingredient,
  recipe?: Recipe,
  createdAt?: string,
  updatedAt?: string,
};

export type Ingredient = {
  __typename: "Ingredient",
  id?: string,
  name?: string | null,
  label?: string | null,
  imageUrl?: string | null,
  status?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type Recipe = {
  __typename: "Recipe",
  id?: string,
  name?: string,
  duration?: string,
  description?: string | null,
  tags?: Array< string | null > | null,
  imageUrl?: Array< string | null > | null,
  cuisine?: string | null,
  preparation?: Array< string | null > | null,
  ingredients?: ModelIngredientAmountConnection,
  status?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelIngredientAmountConnection = {
  __typename: "ModelIngredientAmountConnection",
  items?:  Array<IngredientAmount | null > | null,
  nextToken?: string | null,
};

export type CreateRecipeInput = {
  id?: string | null,
  name: string,
  duration: string,
  description?: string | null,
  tags?: Array< string | null > | null,
  imageUrl?: Array< string | null > | null,
  cuisine?: string | null,
  preparation?: Array< string | null > | null,
  status?: string | null,
};

export type ModelRecipeConditionInput = {
  name?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  cuisine?: ModelStringInput | null,
  preparation?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateRecipeInput = {
  id: string,
  name?: string | null,
  duration?: string | null,
  description?: string | null,
  tags?: Array< string | null > | null,
  imageUrl?: Array< string | null > | null,
  cuisine?: string | null,
  preparation?: Array< string | null > | null,
  status?: string | null,
};

export type DeleteRecipeInput = {
  id?: string | null,
};

export type CreateIngredientInput = {
  id?: string | null,
  name?: string | null,
  label?: string | null,
  imageUrl?: string | null,
  status?: string | null,
};

export type ModelIngredientConditionInput = {
  name?: ModelStringInput | null,
  label?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelIngredientConditionInput | null > | null,
  or?: Array< ModelIngredientConditionInput | null > | null,
  not?: ModelIngredientConditionInput | null,
};

export type UpdateIngredientInput = {
  id: string,
  name?: string | null,
  label?: string | null,
  imageUrl?: string | null,
  status?: string | null,
};

export type DeleteIngredientInput = {
  id?: string | null,
};

export type ModelIngredientAmountConditionInput = {
  RecipeId?: ModelIDInput | null,
  ingredientId?: ModelIDInput | null,
  quantity?: ModelFloatInput | null,
  quantityUnit?: ModelStringInput | null,
  quantityInput?: ModelStringInput | null,
  and?: Array< ModelIngredientAmountConditionInput | null > | null,
  or?: Array< ModelIngredientAmountConditionInput | null > | null,
  not?: ModelIngredientAmountConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateIngredientAmountInput = {
  id: string,
  RecipeId?: string | null,
  ingredientId?: string | null,
  quantity?: number | null,
  quantityUnit?: string | null,
  quantityInput?: string | null,
  ingredientAmountRecipeId?: string | null,
};

export type DeleteIngredientAmountInput = {
  id?: string | null,
};

export type CreateShopInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  imageUrl?: string | null,
  status?: string | null,
};

export type ModelShopConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelShopConditionInput | null > | null,
  or?: Array< ModelShopConditionInput | null > | null,
  not?: ModelShopConditionInput | null,
};

export type Shop = {
  __typename: "Shop",
  id?: string,
  name?: string,
  description?: string | null,
  imageUrl?: string | null,
  status?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateShopInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  imageUrl?: string | null,
  status?: string | null,
};

export type DeleteShopInput = {
  id?: string | null,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  cuisine?: ModelStringInput | null,
  preparation?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection",
  items?:  Array<Recipe | null > | null,
  nextToken?: string | null,
};

export type ModelIngredientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  label?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelIngredientFilterInput | null > | null,
  or?: Array< ModelIngredientFilterInput | null > | null,
  not?: ModelIngredientFilterInput | null,
};

export type ModelIngredientConnection = {
  __typename: "ModelIngredientConnection",
  items?:  Array<Ingredient | null > | null,
  nextToken?: string | null,
};

export type ModelIngredientAmountFilterInput = {
  id?: ModelIDInput | null,
  RecipeId?: ModelIDInput | null,
  ingredientId?: ModelIDInput | null,
  quantity?: ModelFloatInput | null,
  quantityUnit?: ModelStringInput | null,
  quantityInput?: ModelStringInput | null,
  and?: Array< ModelIngredientAmountFilterInput | null > | null,
  or?: Array< ModelIngredientAmountFilterInput | null > | null,
  not?: ModelIngredientAmountFilterInput | null,
};

export type ModelShopFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelShopFilterInput | null > | null,
  or?: Array< ModelShopFilterInput | null > | null,
  not?: ModelShopFilterInput | null,
};

export type ModelShopConnection = {
  __typename: "ModelShopConnection",
  items?:  Array<Shop | null > | null,
  nextToken?: string | null,
};

export type BatchAddIngredientAmountMutationVariables = {
  ingredientAmounts?: Array< CreateIngredientAmountInput | null > | null,
};

export type BatchAddIngredientAmountMutation = {
  batchAddIngredientAmount?:  Array< {
    __typename: "IngredientAmount",
    id: string,
    RecipeId: string,
    ingredientId: string,
    quantity?: number | null,
    quantityUnit?: string | null,
    quantityInput?: string | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      label?: string | null,
      imageUrl?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      duration: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      imageUrl?: Array< string | null > | null,
      cuisine?: string | null,
      preparation?: Array< string | null > | null,
      ingredients?:  {
        __typename: "ModelIngredientAmountConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type CreateRecipeMutationVariables = {
  input?: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    duration: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    imageUrl?: Array< string | null > | null,
    cuisine?: string | null,
    preparation?: Array< string | null > | null,
    ingredients?:  {
      __typename: "ModelIngredientAmountConnection",
      items?:  Array< {
        __typename: "IngredientAmount",
        id: string,
        RecipeId: string,
        ingredientId: string,
        quantity?: number | null,
        quantityUnit?: string | null,
        quantityInput?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input?: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    duration: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    imageUrl?: Array< string | null > | null,
    cuisine?: string | null,
    preparation?: Array< string | null > | null,
    ingredients?:  {
      __typename: "ModelIngredientAmountConnection",
      items?:  Array< {
        __typename: "IngredientAmount",
        id: string,
        RecipeId: string,
        ingredientId: string,
        quantity?: number | null,
        quantityUnit?: string | null,
        quantityInput?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input?: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    duration: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    imageUrl?: Array< string | null > | null,
    cuisine?: string | null,
    preparation?: Array< string | null > | null,
    ingredients?:  {
      __typename: "ModelIngredientAmountConnection",
      items?:  Array< {
        __typename: "IngredientAmount",
        id: string,
        RecipeId: string,
        ingredientId: string,
        quantity?: number | null,
        quantityUnit?: string | null,
        quantityInput?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIngredientMutationVariables = {
  input?: CreateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type CreateIngredientMutation = {
  createIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    label?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIngredientMutationVariables = {
  input?: UpdateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type UpdateIngredientMutation = {
  updateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    label?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIngredientMutationVariables = {
  input?: DeleteIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type DeleteIngredientMutation = {
  deleteIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    label?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIngredientAmountMutationVariables = {
  input?: CreateIngredientAmountInput,
  condition?: ModelIngredientAmountConditionInput | null,
};

export type CreateIngredientAmountMutation = {
  createIngredientAmount?:  {
    __typename: "IngredientAmount",
    id: string,
    RecipeId: string,
    ingredientId: string,
    quantity?: number | null,
    quantityUnit?: string | null,
    quantityInput?: string | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      label?: string | null,
      imageUrl?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      duration: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      imageUrl?: Array< string | null > | null,
      cuisine?: string | null,
      preparation?: Array< string | null > | null,
      ingredients?:  {
        __typename: "ModelIngredientAmountConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIngredientAmountMutationVariables = {
  input?: UpdateIngredientAmountInput,
  condition?: ModelIngredientAmountConditionInput | null,
};

export type UpdateIngredientAmountMutation = {
  updateIngredientAmount?:  {
    __typename: "IngredientAmount",
    id: string,
    RecipeId: string,
    ingredientId: string,
    quantity?: number | null,
    quantityUnit?: string | null,
    quantityInput?: string | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      label?: string | null,
      imageUrl?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      duration: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      imageUrl?: Array< string | null > | null,
      cuisine?: string | null,
      preparation?: Array< string | null > | null,
      ingredients?:  {
        __typename: "ModelIngredientAmountConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIngredientAmountMutationVariables = {
  input?: DeleteIngredientAmountInput,
  condition?: ModelIngredientAmountConditionInput | null,
};

export type DeleteIngredientAmountMutation = {
  deleteIngredientAmount?:  {
    __typename: "IngredientAmount",
    id: string,
    RecipeId: string,
    ingredientId: string,
    quantity?: number | null,
    quantityUnit?: string | null,
    quantityInput?: string | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      label?: string | null,
      imageUrl?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      duration: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      imageUrl?: Array< string | null > | null,
      cuisine?: string | null,
      preparation?: Array< string | null > | null,
      ingredients?:  {
        __typename: "ModelIngredientAmountConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateShopMutationVariables = {
  input?: CreateShopInput,
  condition?: ModelShopConditionInput | null,
};

export type CreateShopMutation = {
  createShop?:  {
    __typename: "Shop",
    id: string,
    name: string,
    description?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShopMutationVariables = {
  input?: UpdateShopInput,
  condition?: ModelShopConditionInput | null,
};

export type UpdateShopMutation = {
  updateShop?:  {
    __typename: "Shop",
    id: string,
    name: string,
    description?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShopMutationVariables = {
  input?: DeleteShopInput,
  condition?: ModelShopConditionInput | null,
};

export type DeleteShopMutation = {
  deleteShop?:  {
    __typename: "Shop",
    id: string,
    name: string,
    description?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRecipeQueryVariables = {
  id?: string,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    duration: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    imageUrl?: Array< string | null > | null,
    cuisine?: string | null,
    preparation?: Array< string | null > | null,
    ingredients?:  {
      __typename: "ModelIngredientAmountConnection",
      items?:  Array< {
        __typename: "IngredientAmount",
        id: string,
        RecipeId: string,
        ingredientId: string,
        quantity?: number | null,
        quantityUnit?: string | null,
        quantityInput?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "ModelRecipeConnection",
    items?:  Array< {
      __typename: "Recipe",
      id: string,
      name: string,
      duration: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      imageUrl?: Array< string | null > | null,
      cuisine?: string | null,
      preparation?: Array< string | null > | null,
      ingredients?:  {
        __typename: "ModelIngredientAmountConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetIngredientQueryVariables = {
  id?: string,
};

export type GetIngredientQuery = {
  getIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    label?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIngredientsQueryVariables = {
  filter?: ModelIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIngredientsQuery = {
  listIngredients?:  {
    __typename: "ModelIngredientConnection",
    items?:  Array< {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      label?: string | null,
      imageUrl?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetIngredientAmountQueryVariables = {
  id?: string,
};

export type GetIngredientAmountQuery = {
  getIngredientAmount?:  {
    __typename: "IngredientAmount",
    id: string,
    RecipeId: string,
    ingredientId: string,
    quantity?: number | null,
    quantityUnit?: string | null,
    quantityInput?: string | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      label?: string | null,
      imageUrl?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      duration: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      imageUrl?: Array< string | null > | null,
      cuisine?: string | null,
      preparation?: Array< string | null > | null,
      ingredients?:  {
        __typename: "ModelIngredientAmountConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIngredientAmountsQueryVariables = {
  filter?: ModelIngredientAmountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIngredientAmountsQuery = {
  listIngredientAmounts?:  {
    __typename: "ModelIngredientAmountConnection",
    items?:  Array< {
      __typename: "IngredientAmount",
      id: string,
      RecipeId: string,
      ingredientId: string,
      quantity?: number | null,
      quantityUnit?: string | null,
      quantityInput?: string | null,
      ingredient?:  {
        __typename: "Ingredient",
        id: string,
        name?: string | null,
        label?: string | null,
        imageUrl?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      recipe?:  {
        __typename: "Recipe",
        id: string,
        name: string,
        duration: string,
        description?: string | null,
        tags?: Array< string | null > | null,
        imageUrl?: Array< string | null > | null,
        cuisine?: string | null,
        preparation?: Array< string | null > | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetShopQueryVariables = {
  id?: string,
};

export type GetShopQuery = {
  getShop?:  {
    __typename: "Shop",
    id: string,
    name: string,
    description?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListShopsQueryVariables = {
  filter?: ModelShopFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShopsQuery = {
  listShops?:  {
    __typename: "ModelShopConnection",
    items?:  Array< {
      __typename: "Shop",
      id: string,
      name: string,
      description?: string | null,
      imageUrl?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    duration: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    imageUrl?: Array< string | null > | null,
    cuisine?: string | null,
    preparation?: Array< string | null > | null,
    ingredients?:  {
      __typename: "ModelIngredientAmountConnection",
      items?:  Array< {
        __typename: "IngredientAmount",
        id: string,
        RecipeId: string,
        ingredientId: string,
        quantity?: number | null,
        quantityUnit?: string | null,
        quantityInput?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    duration: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    imageUrl?: Array< string | null > | null,
    cuisine?: string | null,
    preparation?: Array< string | null > | null,
    ingredients?:  {
      __typename: "ModelIngredientAmountConnection",
      items?:  Array< {
        __typename: "IngredientAmount",
        id: string,
        RecipeId: string,
        ingredientId: string,
        quantity?: number | null,
        quantityUnit?: string | null,
        quantityInput?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    duration: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    imageUrl?: Array< string | null > | null,
    cuisine?: string | null,
    preparation?: Array< string | null > | null,
    ingredients?:  {
      __typename: "ModelIngredientAmountConnection",
      items?:  Array< {
        __typename: "IngredientAmount",
        id: string,
        RecipeId: string,
        ingredientId: string,
        quantity?: number | null,
        quantityUnit?: string | null,
        quantityInput?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIngredientSubscription = {
  onCreateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    label?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIngredientSubscription = {
  onUpdateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    label?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIngredientSubscription = {
  onDeleteIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    label?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIngredientAmountSubscription = {
  onCreateIngredientAmount?:  {
    __typename: "IngredientAmount",
    id: string,
    RecipeId: string,
    ingredientId: string,
    quantity?: number | null,
    quantityUnit?: string | null,
    quantityInput?: string | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      label?: string | null,
      imageUrl?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      duration: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      imageUrl?: Array< string | null > | null,
      cuisine?: string | null,
      preparation?: Array< string | null > | null,
      ingredients?:  {
        __typename: "ModelIngredientAmountConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIngredientAmountSubscription = {
  onUpdateIngredientAmount?:  {
    __typename: "IngredientAmount",
    id: string,
    RecipeId: string,
    ingredientId: string,
    quantity?: number | null,
    quantityUnit?: string | null,
    quantityInput?: string | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      label?: string | null,
      imageUrl?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      duration: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      imageUrl?: Array< string | null > | null,
      cuisine?: string | null,
      preparation?: Array< string | null > | null,
      ingredients?:  {
        __typename: "ModelIngredientAmountConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIngredientAmountSubscription = {
  onDeleteIngredientAmount?:  {
    __typename: "IngredientAmount",
    id: string,
    RecipeId: string,
    ingredientId: string,
    quantity?: number | null,
    quantityUnit?: string | null,
    quantityInput?: string | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      label?: string | null,
      imageUrl?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      name: string,
      duration: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      imageUrl?: Array< string | null > | null,
      cuisine?: string | null,
      preparation?: Array< string | null > | null,
      ingredients?:  {
        __typename: "ModelIngredientAmountConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateShopSubscription = {
  onCreateShop?:  {
    __typename: "Shop",
    id: string,
    name: string,
    description?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShopSubscription = {
  onUpdateShop?:  {
    __typename: "Shop",
    id: string,
    name: string,
    description?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShopSubscription = {
  onDeleteShop?:  {
    __typename: "Shop",
    id: string,
    name: string,
    description?: string | null,
    imageUrl?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
