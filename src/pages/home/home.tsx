import { RecipeList } from '../../components/recipe-list/recipe-list';
import { SearchBar } from '../../components/search-bar/search-bar';
import { useRetrieveRecipesQuery } from '../../providers/store/services/recipes';

import styles from './home.module.css';

export function Home() {
    const { data: recipesRes, isSuccess, isLoading } = useRetrieveRecipesQuery();

    return (
        <>
            <div className={styles.title}>
                <h2>Main Page</h2>
                <SearchBar />
            </div>
            {isLoading && <p>Loading...</p>}
            {isSuccess && <RecipeList recipes={recipesRes.recipes} />}
        </>
    );
}
