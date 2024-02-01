import { RecipeDto } from '../../providers/store/types/types';

import styles from './recipe-details.module.css';

type Props = {
    recipe: RecipeDto;
};

export function RecipeDetails({ recipe: { name, ingredients, image, instructions } }: Props) {
    const ingredientElements = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>;
    });
    const instructionElement = instructions.join(' ');
    return (
        <section className={styles.recipe}>
            <h3 className={styles.title}>{name}</h3>
            <img src={image} className={styles.image} />
            <ul className={styles.ingredients}>{ingredientElements}</ul>
            <p className={styles.instructions}>{instructionElement}</p>
        </section>
    );
}
