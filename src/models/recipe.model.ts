export type RecipeModel = {
    name: string;
    duration: string;
    cuisine: string;
    ingredients: Ingredient[];
    preparation: {
        [steps: string]: string;
    };
    tags?: string[]
}
export type Ingredient = {
    name: string;
    quantity: number;
    quantityUnit: string;
    price: number;
}
