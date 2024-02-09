import { skipToken } from '@reduxjs/toolkit/query';
import { useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDebounce } from '../../hooks/useDebounce';
import { useAddToHistoryMutation } from '../../providers/store/services/history';
import { useFindRecipesQuery } from '../../providers/store/services/recipes';
import { ROUTES } from '../../utils/constants';

import styles from './search-bar.module.css';

type Props = {
    initSearch?: string;
};

export function SearchBar({ initSearch = '' }: Props) {
    const navigate = useNavigate();
    const [search, setSearch] = useState<string>(initSearch);
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [historyAddTrigger] = useAddToHistoryMutation();
    const inputRef = useRef<HTMLInputElement>(null);

    const value = useDebounce(search, 1300);
    const { currentData } = useFindRecipesQuery(value ? { str: value } : skipToken);
    const elements = useMemo(() => {
        if (currentData) {
            return currentData?.recipes.map((recipe) => (
                <Link className={styles.link} to={`${ROUTES.RECIPE}/${recipe.id}`} key={recipe.name}>
                    {recipe.name}
                </Link>
            ));
        }
    }, [currentData]);

    function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault();
        if (search) {
            historyAddTrigger({ word: search, timestamp: Date.now() });
            navigate(`${ROUTES.SEARCH}/${search}`);
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.bar} onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={inputRef}
                    className={styles.input}
                    placeholder="Search"
                    value={search}
                    onFocus={() => setHasFocus(true)}
                    onBlur={() => setHasFocus(false)}
                    onChange={(evt) => {
                        setSearch(evt.target.value);
                    }}
                />
                <button type="submit">Search</button>
            </form>
            {hasFocus && currentData && <div className={styles.list}>{elements}</div>}
        </div>
    );
}
