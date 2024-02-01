import { Navigate, useParams } from 'react-router-dom';

import { RecipeDetails } from '../../components/recipe-details/recipe-details';
import { useRetrieveRecipeQuery } from '../../providers/store/services/recipes';

export function RecipePage() {
    const { id } = useParams();
    const { data: recipe, isSuccess, isLoading } = useRetrieveRecipeQuery(Number(id), { skip: !id });
    if (!id) {
        return <Navigate to="/" />;
    }
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isSuccess && <RecipeDetails recipe={recipe} />}
        </>
    );
}
