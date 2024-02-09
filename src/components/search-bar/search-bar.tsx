import { skipToken } from '@reduxjs/toolkit/query';
import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDebounce } from '../../hooks/useDebounce';
import { useFindRecipesQuery } from '../../providers/store/services/recipes';

import styles from './search-bar.module.css';

export function SearchBar() {
    const navigate = useNavigate();
    const [search, setSearch] = useState<string | undefined>();

    const value = useDebounce(search, 1300);
    const { currentData } = useFindRecipesQuery(value ? { str: value } : skipToken);
    const elements = useMemo(() => {
        if (currentData) {
            return currentData?.recipes.map((recipe) => (
                <Link className={styles.link} to={`/recipe/${recipe.id}`} key={recipe.name}>
                    {recipe.name}
                </Link>
            ));
        }
    }, [currentData]);

    function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault();
        if (search) {
            navigate(`/search/${search}`);
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.bar} onSubmit={handleSubmit}>
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
