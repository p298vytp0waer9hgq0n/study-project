import { useStorage } from '../../hooks/useStorage';
import { useAppSelector } from '../../providers/store/hooks';
import { RecipeDto } from '../../providers/store/types/types';
import { LikeButton } from '../like-button/like-button';

import styles from './recipe-details.module.css';

type Props = {
    recipe: RecipeDto;
};

export function RecipeDetails({ recipe: { id, name, ingredients, image, instructions } }: Props) {
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
    const ingredientElements = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>;
    });
    const instructionElement = instructions.join(' ');
    return (
        <section className={styles.recipe}>
            <h3 className={styles.title}>{name}</h3>
            <img src={image} className={styles.image} />
            {loggedIn && <LikeButton isFavorite={cardIsFavorite} onClick={handleLike} extraClass={styles.like} />}
            <ul className={styles.ingredients}>{ingredientElements}</ul>
            <p className={styles.instructions}>{instructionElement}</p>
        </section>
    );
}
