import { skipToken } from '@reduxjs/toolkit/query';
import { useParams } from 'react-router-dom';

import { RecipeList } from '../../components/recipe-list/recipe-list';
import { useFindRecipesQuery } from '../../providers/store/services/recipes';

export function Search() {
    const { search } = useParams();
    const { data, isSuccess, isLoading } = useFindRecipesQuery(search ? { str: search, limit: 50 } : skipToken);

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isSuccess && <RecipeList recipes={data.recipes} />}
        </>
    );
}
