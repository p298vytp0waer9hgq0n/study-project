import { RecipeList } from '../../components/recipe-list/recipe-list';
import { useAppSelector } from '../../providers/store/hooks';
import { useRetrieveSomeRecipesQuery } from '../../providers/store/services/recipes';

export function Favorite() {
    const favorites = useAppSelector((store) => store.user.data.favorites);
    const { data: recipes, isLoading, isSuccess } = useRetrieveSomeRecipesQuery(favorites);
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isSuccess && recipes && <RecipeList recipes={recipes} />}
        </>
    );
}
