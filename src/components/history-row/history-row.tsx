import { Link } from 'react-router-dom';

import styles from './history-row.module.css';

type Props = {
    name: string;
    link: string;
    timestamp: number;
};

export function HistoryRow({ name, link, timestamp }: Props) {
    const date = new Date(timestamp).toUTCString();
    return (
        <li className={styles.container}>
            <Link to={link}>{name}</Link>
            <p>{date}</p>
        </li>
    );
}
