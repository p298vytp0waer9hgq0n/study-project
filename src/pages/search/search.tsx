import { skipToken } from '@reduxjs/toolkit/query';
import { useParams } from 'react-router-dom';

import { RecipeList } from '../../components/recipe-list/recipe-list';
import { SearchBar } from '../../components/search-bar/search-bar';
import { useFindRecipesQuery } from '../../providers/store/services/recipes';

import styles from './search.module.css';

export function Search() {
    const { search } = useParams();
    const { data, isSuccess, isLoading } = useFindRecipesQuery(search ? { str: search, limit: 50 } : skipToken);

    return (
        <>
            <div className={styles.title}>
                <h2>Search results</h2>
                <SearchBar initSearch={search} />
            </div>
            {isLoading && <p>Loading...</p>}
            {isSuccess && <RecipeList recipes={data.recipes} />}
        </>
    );
}
