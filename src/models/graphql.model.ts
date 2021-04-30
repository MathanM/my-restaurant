export type RecipeItems =
    Array< RecipeItem | null>
    | null
    | undefined
export type RecipeItem = {
    __typename: "Recipe",
    id: string,
    name: string,
    duration: string,
    description?: string | null,
    tags?: Array<string | null> | null,
    imageUrl?: Array<string | null> | null,
    cuisine?: string | null,
    preparation?: Array<string | null> | null,
    ingredients?: any,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
}
