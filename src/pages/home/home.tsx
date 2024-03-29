/* eslint-disable import/no-default-export */
import { Loading } from '../../components/loading/loading';
import { RecipeList } from '../../components/recipe-list/recipe-list';
import { SearchBar } from '../../components/search-bar/search-bar';
import { useRetrieveRecipesQuery } from '../../providers/store/services/recipes';

import styles from './home.module.css';

export default function Home() {
    const { data, isSuccess, isLoading } = useRetrieveRecipesQuery();

    return (
        <>
            <div className={styles.title}>
                <h2>Main Page</h2>
                <SearchBar />
            </div>
            {isLoading && <Loading />}
            {isSuccess && <RecipeList recipes={data} />}
        </>
    );
}
