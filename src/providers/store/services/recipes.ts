import { isRecipe } from '../../../utils/is-recipe';
import type { RecipeDto, RecipesDto } from '../types/types';
import { dummyjsonApi } from './dummyjs-api';

export const recipesApi = dummyjsonApi.injectEndpoints({
    endpoints: (builder) => ({
        retrieveRecipes: builder.query<RecipeDto[], void>({
            query() {
                return {
                    url: 'recipes/',
                };
            },
            transformResponse: (response: RecipesDto) => response.recipes,
        }),
        retrieveRecipe: builder.query<RecipeDto, number>({
            query(id) {
                return {
                    url: `recipes/${id}`,
                };
            },
        }),
        retrieveSomeRecipes: builder.query<RecipeDto[], number[]>({
            queryFn: async (recipesIds, _api, _options, baseQuery) => {
                const data = await Promise.all(
                    recipesIds.map(async (id) => {
                        const result = await baseQuery(`recipes/${id}`);
                        return result.data;
                    }),
                );
                const res = data.filter(isRecipe);
                return { data: res };
            },
        }),
        findRecipes: builder.query<RecipesDto, { str: string; limit?: number }>({
            query({ str, limit = 5 }) {
                return {
                    url: `recipes/search?q=${encodeURIComponent(str)}&limit=${limit}`,
                };
            },
        }),
    }),
});

export const { useRetrieveRecipesQuery, useRetrieveRecipeQuery, useRetrieveSomeRecipesQuery, useFindRecipesQuery } =
    recipesApi;
