import { useParams } from 'react-router';
import { useGetPostQuery } from '@entities/post/api';
import { useI18n } from '@app/providers/I18nProvider';
import ru from './locales/ru.json';
import en from './locales/en.json';
import styles from './PostPage.module.css';
import ReactMarkdown from 'react-markdown';

const translations = { ru, en };
type LocaleKey = keyof typeof ru;

export const PostPage = () => {
    const { id } = useParams<{ id: string }>();
    const { lang } = useI18n();
    const t = (key: LocaleKey): string => translations[lang][key] || key;
    const { data: post, isLoading, error } = useGetPostQuery(id!);

    if (isLoading) return <div>{t('loading')}</div>;
    if (error) return <div className={styles.error}>{t('error')}</div>;
    if (!post) return <div>{t('not_found')}</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
                <b>{t('author')}:</b> {post.author_id} | <b>{t('date')}:</b> {new Date(post.created_at).toLocaleDateString()}
            </div>
            <div className={styles.tags}>
                <b>{t('tags')}:</b> {post.tags && post.tags.length > 0 ? post.tags.join(', ') : '-'}
            </div>
            <div className={styles.status}>
                <b>{t('status')}:</b> {post.status}
            </div>
            <hr className={styles.hr} />
            <div className={styles.content}>
                <ReactMarkdown>{post.raw_content}</ReactMarkdown>
            </div>
        </div>
    );
}; 