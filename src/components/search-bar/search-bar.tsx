import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect, useMemo, useRef, useState } from 'react';
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
    const contRef = useRef<HTMLDivElement>(null);

    const value = useDebounce(search, 1000);
    const { currentData } = useFindRecipesQuery(value ? { str: value } : skipToken);
    const elements = useMemo(() => {
        if (currentData) {
            return currentData?.recipes.map((recipe) => (
                <Link className={styles.link} to={`${ROUTES.RECIPE}/${recipe.id}`} key={recipe.id}>
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

    useEffect(() => {
        function closeDropdown(evt: MouseEvent) {
            if (!contRef.current?.contains(evt.target as Node)) {
                setHasFocus(false);
            }
        }
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    return (
        <div className={styles.container} ref={contRef}>
            <form className={styles.bar} onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Search"
                    value={search}
                    onFocus={() => setHasFocus(true)}
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
