import { RecipesDto } from '../types/types';
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
    }),
});

export const { useRetrieveRecipesQuery } = recipesApi;
