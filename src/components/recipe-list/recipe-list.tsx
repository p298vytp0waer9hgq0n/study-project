import { RecipeDto } from '../../providers/store/types/types';
import { RecipeCard } from '../recipe-card/recipe-card';

import styles from './recipe-list.module.css';

type Props = {
    recipes: RecipeDto[];
};

export function RecipeList({ recipes }: Props) {
    const elements = recipes?.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);
    if (!elements.length) {
        return <p>Nothing to display</p>;
    }

    return <ul className={styles.container}>{elements}</ul>;
}
