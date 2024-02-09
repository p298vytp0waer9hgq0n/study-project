import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext, AppContextType } from '../../App';
import { useStorage } from '../../hooks/useStorage';
import { useAppSelector } from '../../providers/store/hooks';
import { ROUTES } from '../../utils/constants';
import { LikeButton } from '../like-button/like-button';

import styles from './recipe-card.module.css';

export type Props = {
    recipe: {
        id: number;
        name: string;
        image: string;
    };
};

export function RecipeCard({ recipe }: Props) {
    const { theme } = useContext(AppContext) as AppContextType;
    const { id, name, image } = recipe;
    const { data, user } = useAppSelector((store) => store.user);
    const loggedIn = Boolean(user);
    const { addToFavorites, removeFromFavorites } = useStorage();
    const cardIsFavorite = data.favorites?.includes(id);

    const containerStyle = theme === 'very light' ? styles.container : `${styles.container} ${styles.container_dark}`;

    function handleLike() {
        if (cardIsFavorite) {
            removeFromFavorites(id);
        } else {
            addToFavorites(id);
        }
    }

    return (
        <li className={containerStyle}>
            <Link to={`${ROUTES.RECIPE}/${id}`}>
                <img src={image} className={styles.image} />
            </Link>
            <div className={styles.title}>
                <Link to={`${ROUTES.RECIPE}/${id}`} className={styles.link}>
                    <p>{name}</p>
                </Link>
                {loggedIn && <LikeButton onClick={handleLike} isFavorite={cardIsFavorite} />}
            </div>
        </li>
    );
}

RecipeCard.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};
