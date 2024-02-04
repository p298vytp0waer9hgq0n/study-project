import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import styles from './header.module.css';

export function Header() {
    const { user } = useAuth();

    return (
        <header className={styles.header}>
            <h1>
                <Link className={styles.title} to={'/'}>
                    Site name
                </Link>
            </h1>
            <nav>
                <ul className={styles.navigation}>
                    {!user && (
                        <>
                            <li>
                                <Link className={styles.navlink} to={'/signup'}>
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navlink} to={'/signin'}>
                                    Sign In
                                </Link>
                            </li>
                        </>
                    )}
                    {user && (
                        <>
                            <p>{user.email}</p>
                            <li>
                                <Link className={styles.navlink} to={'/favorite'}>
                                    Favorites
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navlink} to={'/history'}>
                                    History
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navlink} to={'/signout'}>
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
