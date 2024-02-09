import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';

import styles from './history-row.module.css';

type Props = {
    name: string;
    timestamp: number;
    handleDelete: (name: string, timestamp: number) => void;
};

export function HistoryRow({ name, timestamp, handleDelete }: Props) {
    const date = new Date(timestamp).toUTCString();
    return (
        <li className={styles.container}>
            <Link to={`${ROUTES.SEARCH}/${name}`}>{name}</Link>
            <p>{date}</p>
            <button type="button" onClick={() => handleDelete(name, timestamp)}>
                Delete
            </button>
        </li>
    );
}
HistoryRow.propTypes = {
    name: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
