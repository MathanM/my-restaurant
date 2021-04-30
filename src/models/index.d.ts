import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Recipe {
  readonly id: string;
  readonly name: string;
  readonly duration: string;
  readonly description?: string;
  readonly tags?: (string | null)[];
  readonly imageUrl?: (string | null)[];
  readonly cuisine?: string;
  readonly preparation?: (string | null)[];
  readonly ingredients?: (IngredientAmount | null)[];
  readonly status?: string;
  constructor(init: ModelInit<Recipe>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}

export declare class IngredientAmount {
  readonly id: string;
  readonly RecipeId: string;
  readonly ingredientId: string;
  readonly quantity?: number;
  readonly quantityUnit?: string;
  readonly ingredient?: Ingredient;
  constructor(init: ModelInit<IngredientAmount>);
  static copyOf(source: IngredientAmount, mutator: (draft: MutableModel<IngredientAmount>) => MutableModel<IngredientAmount> | void): IngredientAmount;
}

export declare class Ingredient {
  readonly id: string;
  readonly name?: string;
  readonly imageUrl?: string;
  readonly status?: string;
  constructor(init: ModelInit<Ingredient>);
  static copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient>) => MutableModel<Ingredient> | void): Ingredient;
}

export declare class Shop {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly imageUrl?: string;
  readonly status?: string;
  constructor(init: ModelInit<Shop>);
  static copyOf(source: Shop, mutator: (draft: MutableModel<Shop>) => MutableModel<Shop> | void): Shop;
}