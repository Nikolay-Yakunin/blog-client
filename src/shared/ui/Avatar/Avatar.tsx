import React from 'react';
import styles from './Avatar.module.css';
import { useNavigate } from 'react-router';

interface AvatarProps {
    src: string;
    alt?: string;
    size?: number;
    userId?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt = 'User avatar', size = 40, userId }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Пока заглушка: переход на /profile или /user/:id
        if (userId) {
            navigate(`/user/${userId}`);
        } else {
            navigate('/profile');
        }
    };

    return (
        <img
            src={src}
            alt={alt}
            className={styles.avatar}
            style={{ width: size, height: size, borderRadius: '50%', cursor: 'pointer', objectFit: 'cover' }}
            onClick={handleClick}
        />
    );
}; 