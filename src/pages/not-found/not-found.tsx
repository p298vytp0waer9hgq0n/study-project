import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';

export function NotFound() {
    return (
        <>
            <h1>404</h1>
            <p>Запрашиваемая страница не найдена</p>
            <Link to={ROUTES.MAIN}>Вернуться на главную</Link>
        </>
    );
}
