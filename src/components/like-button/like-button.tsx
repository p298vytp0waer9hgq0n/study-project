import styles from './like-button.module.css';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    extraClass?: string;
    isFavorite: boolean;
}
export function LikeButton({ extraClass = '', isFavorite, ...rest }: Props) {
    const buttonStyle = isFavorite ? `${styles.button} ${styles.button_liked}` : styles.button;
    return (
        <button type="button" className={`${buttonStyle} ${extraClass}`} {...rest}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19">
                <path
                    strokeWidth="2px"
                    fillRule="evenodd"
                    d="M19.741 2.15c2.132 2.088 2.132 5.51 0 7.619l-8.76 8.661-8.738-8.64A5.405 5.405 0 0 1 .66 5.97c0-1.44.549-2.796 1.583-3.82C4.353.044 7.815.044 9.947 2.173l1.035 1.022 1.034-1.043c2.132-2.108 5.593-2.108 7.725 0z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
}
