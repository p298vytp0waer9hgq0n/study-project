import { skipToken } from '@reduxjs/toolkit/query';
import { Navigate, useParams } from 'react-router-dom';

import { RecipeDetails } from '../../components/recipe-details/recipe-details';
import { useRetrieveRecipeQuery } from '../../providers/store/services/recipes';
import { ROUTES } from '../../utils/constants';

export function RecipePage() {
    const { id } = useParams();
    const { data: recipe, isSuccess, isLoading } = useRetrieveRecipeQuery(Number(id) || skipToken);

    if (!id) {
        return <Navigate to={ROUTES.MAIN} />;
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isSuccess && <RecipeDetails recipe={recipe} />}
        </>
    );
}
