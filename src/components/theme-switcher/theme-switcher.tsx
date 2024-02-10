import { useContext } from 'react';

import { AppContext, AppContextType } from '../../App';

import styles from './theme-switcher.module.css';

export function ThemeSwitcher() {
    const { theme, setTheme } = useContext(AppContext) as AppContextType;
    const isVeryLight = theme === 'very light';
    const switcherStyle = isVeryLight ? styles.switcher : `${styles.switcher} ${styles.switcher_dark}`;
    function handleClick() {
        setTheme(isVeryLight ? 'light' : 'very light');
    }
    return <div className={switcherStyle} onClick={handleClick}></div>;
}
