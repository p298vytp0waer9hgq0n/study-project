import { skipToken } from '@reduxjs/toolkit/query';

import { Loading } from '../../components/loading/loading';
import { RecipeList } from '../../components/recipe-list/recipe-list';
import { useAppSelector } from '../../providers/store/hooks';
import { useRetrieveSomeRecipesQuery } from '../../providers/store/services/recipes';

export function Favorite() {
    const favorites = useAppSelector((store) => store.user.data.favorites);
    const {
        data: recipes,
        isLoading,
        isSuccess,
    } = useRetrieveSomeRecipesQuery(favorites.length ? favorites : skipToken);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <h2>Favorites</h2>
            {!favorites.length && isSuccess && <p>No favorite recipes present. Add some first.</p>}
            {isSuccess && <RecipeList recipes={recipes} />}
        </>
    );
}
