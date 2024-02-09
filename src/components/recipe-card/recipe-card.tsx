import { Link } from 'react-router-dom';

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
    const { id, name, image } = recipe;
    const { data, user } = useAppSelector((store) => store.user);
    const loggedIn = Boolean(user);
    const { addToFavorites, removeFromFavorites } = useStorage();
    const cardIsFavorite = data.favorites?.includes(id);

    function handleLike() {
        if (cardIsFavorite) {
            removeFromFavorites(id);
        } else {
            addToFavorites(id);
        }
    }

    return (
        <li className={styles.container}>
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
