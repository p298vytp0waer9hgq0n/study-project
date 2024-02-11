import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../utils/constants';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';

import styles from './header.module.css';

export function Header() {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return;
    }

    return (
        <header className={styles.header}>
            <h1>
                <Link className={styles.title} to={ROUTES.MAIN}>
                    Logo
                </Link>
            </h1>
            <nav>
                <ul className={styles.navigation}>
                    <ThemeSwitcher />
                    {!user && (
                        <>
                            <li>
                                <Link className={styles.navlink} to={ROUTES.SIGNUP}>
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navlink} to={ROUTES.SIGNIN}>
                                    Sign In
                                </Link>
                            </li>
                        </>
                    )}
                    {user && (
                        <>
                            <p>{user.email}</p>
                            <li>
                                <Link className={styles.navlink} to={ROUTES.FAVORITES}>
                                    Favorites
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navlink} to={ROUTES.HISTORY}>
                                    History
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navlink} to={ROUTES.SIGNOUT}>
                                    Sign Out
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}
