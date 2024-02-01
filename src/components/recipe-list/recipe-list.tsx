import { useRetrieveRecipesQuery } from '../../providers/store/services/recipes';
import { RecipeCard } from '../recipe-card/recipe-card';

import styles from './recipe-list.module.css';

export function RecipeList() {
    const { data: recipesRes, isSuccess, isLoading } = useRetrieveRecipesQuery();
    const elements = recipesRes?.recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);

    return (
        <section>
            {isLoading && <p>Loading...</p>}
            {isSuccess && <ul className={styles.container}>{elements}</ul>}
        </section>
    );
}
