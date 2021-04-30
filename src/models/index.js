// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Recipe, IngredientAmount, Ingredient, Shop } = initSchema(schema);

export {
  Recipe,
  IngredientAmount,
  Ingredient,
  Shop
};