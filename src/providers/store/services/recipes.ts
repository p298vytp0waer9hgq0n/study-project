import { RecipeDto, RecipesDto } from '../types/types';
import { dummyjsonApi } from './dummyjs-api';

export const recipesApi = dummyjsonApi.injectEndpoints({
    endpoints: (builder) => ({
        retrieveRecipes: builder.query<RecipesDto, void>({
            query() {
                return {
                    url: 'recipes/',
                };
            },
        }),
        retrieveRecipe: builder.query<RecipeDto, number>({
            query(id) {
                return {
                    url: `recipes/${id}`,
                };
            },
        }),
    }),
});

export const { useRetrieveRecipesQuery, useRetrieveRecipeQuery } = recipesApi;
