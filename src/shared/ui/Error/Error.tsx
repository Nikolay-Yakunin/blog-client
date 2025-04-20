import styles from './Error.module.css';

type ErrorProps = {
    message: string;
};

export const Error = ({ message }: ErrorProps) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Error</h1>
            <p className={styles.message}>{message}</p>
        </div>
    );
};
