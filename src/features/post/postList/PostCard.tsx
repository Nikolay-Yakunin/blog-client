import React from 'react';
import { Link } from 'react-router';
import styles from './PostCard.module.css';
import ru from './locales/ru.json';
import en from './locales/en.json';
import { useI18n } from '@app/providers/I18nProvider';

interface PostCardProps {
    id: string;
    title: string;
    description?: string;
    author?: string;
    date?: string;
    tags?: string[];
    status?: string;
}

const translations = { ru, en };

type LocaleKey = keyof typeof ru;

export const PostCard: React.FC<PostCardProps> = ({ id, title, description, author, date, tags, status }) => {
    const { lang } = useI18n();
    const t = (key: LocaleKey): string => translations[lang][key] || key;
    return (
        <Link to={`/post/${id}`} className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            {description && <div className={styles.description}>{description}</div>}
            <div className={styles.meta}>
                <span><b>{t('author')}:</b> {author || ''}</span>
                {date && <span> | <b>{t('date')}:</b> {date}</span>}
            </div>
            {tags && tags.length > 0 && (
                <div className={styles.tags}><b>{t('tags')}:</b> {tags.join(', ')}</div>
            )}
            {status && (
                <div className={styles.status}><b>{t('status')}:</b> {status}</div>
            )}
        </Link>
    );
}; 