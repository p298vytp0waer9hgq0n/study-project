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
                            <li>
                                <Link className={styles.navlink} to={'/favorite'}>
                                    Favorite
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
