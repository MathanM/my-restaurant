export type RecipeModel = {
    id: string;
    name: string;
    duration: string;
    imageUrl: (string | null)[] | null | undefined;
    ingredients: Ingredient[];
    preparation: Preparation;
    tags?: (string | null)[] | null | undefined;
    cuisine?: string | null | undefined;
    description?: string | null | undefined;
}
export type Preparation = {
    [steps: string]: string;
}
export type Ingredient = {
    id: string;
    quantityInput: string;
    quantity: number;
    quantityUnit: string;
    imageUrl: string;
    name: string;
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
