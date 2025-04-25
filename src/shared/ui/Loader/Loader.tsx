import React from 'react';
import styles from './Loader.module.css';

/**
 * Анимированный круговой лоадер.
 * @param size Размер лоадера в px (по умолчанию 40)
 * @param className Дополнительный CSS-класс
 */
interface LoaderProps {
    size?: number;
    className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = 40, className = '' }) => {
    const style = {
        // Передаём переменные для размера и толщины через style
        '--loader-size': `${size}px`,
        '--loader-thickness': `${Math.max(2, Math.round(size / 10))}px`,
    } as React.CSSProperties;

    return (
        <span
            className={styles.loader + (className ? ' ' + className : '')}
            style={style}
            data-testid="loader"
        />
    );
}; 