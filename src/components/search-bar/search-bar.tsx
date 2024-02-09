import { skipToken } from '@reduxjs/toolkit/query';
import { useMemo, useState } from 'react';

import { useDebounce } from '../../hooks/useDebounce';
import { useFindRecipesQuery } from '../../providers/store/services/recipes';

import styles from './search-bar.module.css';

export function SearchBar() {
    const [search, setSearch] = useState<string | undefined>();

    const value = useDebounce(search, 1300);
    const { currentData } = useFindRecipesQuery(value ? { str: value } : skipToken);
    const elements = useMemo(() => {
        if (currentData) {
            return currentData?.recipes.map((recipe) => <p key={recipe.name}>{recipe.name}</p>);
        }
    }, [currentData]);

    return (
        <div className={styles.container}>
            <form className={styles.bar}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Search"
                    value={search}
                    onChange={(evt) => {
                        setSearch(evt.target.value);
                    }}
                />
                <button type="submit">Искать</button>
            </form>
            {currentData && <div className={styles.list}>{elements}</div>}
        </div>
    );
}
