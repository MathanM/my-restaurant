export type RecipeModel = {
    id: string;
    name: string;
    duration: string;
    imageUrl: string;
    ingredients: Ingredient[];
    preparation: {
        [steps: string]: string;
    };
    tags?: string[];
    cuisine?: string;
    description?: string;
}
export type Ingredient = {
    id: string;
    quantity: number;
    quantityUnit: string;
    image: string;
    label: string;
}
export type Result = {
    food: {
        foodId: string;
        image: string;
        label: string;
        categoryLabel: string;
        brand?: string;
        isSelected?: boolean;
        quantity: string;
    }
}
