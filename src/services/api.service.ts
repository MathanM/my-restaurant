import {Ingredient} from "../models/recipe.model";
import {API, graphqlOperation} from "aws-amplify";
import {batchAddIngredientAmount} from "../graphql/mutations";

export async function createIngredients(ingredients: Ingredient[], recipeId: string){
    const ingParam = ingredients.map((ing) => {
        return {
            id:"",
            RecipeId: recipeId,
            ingredientAmountRecipeId: recipeId,
            quantity: ing.quantity,
            quantityUnit: ing.quantityUnit,
            quantityInput: ing.quantityInput,
            ingredientId: ing.ingredientId
        }
    });
    const ingResult: any = await API.graphql(graphqlOperation(batchAddIngredientAmount, {
        ingredientAmounts: ingParam
    }));
}
