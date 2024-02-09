export type RecipeDto = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
};

export type RecipesDto = {
    recipes: RecipeDto[];
    limit: number;
    skip: number;
    total: number;
};

export type UserData = {
    favorites: number[];
    history: number[];
};

export type HistoryRecord = {
    word: string;
    timestamp: number;
};
