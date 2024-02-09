import { Link } from 'react-router-dom';

import { useStorage } from '../../hooks/useStorage';
import { useAppSelector } from '../../providers/store/hooks';
import { ROUTES } from '../../utils/constants';

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
                {loggedIn && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="19"
                        fill="none"
                        onClick={handleLike}
                        cursor="pointer"
                    >
                        <path
                            fill={cardIsFavorite ? 'red' : 'var(--color-accent)'}
                            d="M20.3 9.786c2.267-2.243 2.267-5.884 0-8.104-2.269-2.243-5.951-2.243-8.22 0l-1.1 1.11-1.1-1.088C7.612-.56 3.93-.56 1.684 1.682A5.657 5.657 0 0 0 0 5.745a5.75 5.75 0 0 0 1.684 4.063L10.98 19l9.32-9.214ZM1.436 5.745c0-1.155.45-2.22 1.28-3.02A4.33 4.33 0 0 1 5.771 1.46c1.1 0 2.2.422 3.054 1.265l2.155 2.11 2.156-2.132c1.684-1.665 4.446-1.665 6.108 0 .808.8 1.28 1.865 1.28 3.02 0 1.154-.45 2.22-1.28 3.02l-8.264 8.192-8.263-8.17c-.808-.822-1.28-1.888-1.28-3.02Z"
                        />
                    </svg>
                )}
            </div>
        </li>
    );
}
