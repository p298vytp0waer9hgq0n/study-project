import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import styles from './header.module.css';

export function Header() {
    const { user } = useAuth();

    console.log(user);

    return (
        <header className={styles.header}>
            <h1>Site name</h1>
            <nav>
                <ul className={styles.navigation}>
                    <li>
                        <Link to={'/favorite'}>Favorite</Link>
                    </li>
                    {!user && (
                        <>
                            <li>
                                <Link to={'/signup'}>Sign Up</Link>
                            </li>
                            <li>
                                <Link to={'/signin'}>Sign In</Link>
                            </li>
                        </>
                    )}
                    {user && (
                        <li>
                            <Link to={'/signout'}>Sign Out</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
