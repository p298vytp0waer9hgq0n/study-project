import { RecipeDto } from '../providers/store/types/types';

export function isRecipe(data: unknown): data is RecipeDto {
    return data instanceof Object && 'prepTimeMinutes' in data;
}
