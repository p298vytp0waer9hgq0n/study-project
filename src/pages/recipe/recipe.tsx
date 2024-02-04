import { useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';

import { RecipeDetails } from '../../components/recipe-details/recipe-details';
import { useAddToHistoryMutation } from '../../providers/store/services/history';
import { useRetrieveRecipeQuery } from '../../providers/store/services/recipes';

export function RecipePage() {
    const { id } = useParams();
    const location = useLocation();
    const { data: recipe, isSuccess, isLoading } = useRetrieveRecipeQuery(Number(id), { skip: !id });
    const [historyTrigger] = useAddToHistoryMutation();
    useEffect(() => {
        if (recipe) {
            const historyRecord = {
                name: recipe.name,
                link: location.pathname,
                timestamp: Date.now(),
            };
            historyTrigger(historyRecord);
        }
    }, [historyTrigger, recipe, location.pathname]);

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
