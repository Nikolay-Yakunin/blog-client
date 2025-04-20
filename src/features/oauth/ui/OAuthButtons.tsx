import React from 'react';
import styles from './OAuthButtons.module.css';
import { Button } from '@shared/ui/Button/Button';
import { useI18n } from '@app/providers/I18nProvider';
import ru from './locales/ru.json';
import en from './locales/en.json';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Error } from '@shared/ui/Error/Error';

const locales = { ru, en };

interface OAuthButtonsProps {
    loading?: boolean;
    error?: string | null;
    onGoogleClick?: () => void;
    onGithubClick?: () => void;
}

export const OAuthButtons: React.FC<OAuthButtonsProps> = ({
    loading = false,
    error = null,
    onGoogleClick,
    onGithubClick,
}) => {
    const { lang } = useI18n();
    const t = locales[lang] || locales.ru;

    const handleGoogleClick = () => {
        window.location.href = 'https://blog-service-production-0f0d.up.railway.app/api/v1/auth/login/google';
    };

    return (
        <div className={styles.oauthButtons}>
            <Button
                onClick={onGoogleClick || handleGoogleClick}
                disabled={loading}
                className={styles.google}
                type="button"
            >
                <FaGoogle style={{ marginRight: 8 }} />{t.google}
            </Button>
            <Button
                onClick={onGithubClick}
                disabled={loading}
                className={styles.github}
                type="button"
            >
                <FaGithub style={{ marginRight: 8 }} />{t.github}
            </Button>
            {loading && <div className={styles.loader}>Загрузка...</div>}
            {error && <Error message={error} />}
        </div>
    );
}; 