export type RecipeModel = {
    id: string;
    name: string;
    duration: string;
    imageUrl: string;
    ingredients: Ingredient[];
    preparation: {
        [steps: string]: string;
    };
    tags?: string[],
    cuisine?: string;
}
export type Ingredient = {
    id: string;
    quantity: number;
    quantityUnit: string;
}
