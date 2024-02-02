import { RecipeList } from '../../components/recipe-list/recipe-list';
import { useRetrieveRecipesQuery } from '../../providers/store/services/recipes';

export function Home() {
    const { data: recipesRes, isSuccess, isLoading } = useRetrieveRecipesQuery();

    return (
        <>
            <h2>Main Page</h2>
            {isLoading && <p>Loading...</p>}
            {isSuccess && <RecipeList recipes={recipesRes.recipes} />}
        </>
    );
}
