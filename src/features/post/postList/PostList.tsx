import { useGetPostsQuery } from '@entities/post/api';
import { PostCard } from './PostCard';
import ru from './locales/ru.json';
import en from './locales/en.json';
import { useI18n } from '@app/providers/I18nProvider';
import { Error } from '@shared/ui/Error/Error';
import { Loader } from '@shared/ui/Loader';

interface PostListProps {
    offset?: number;
    limit?: number;
}

const translations = { ru, en };
type LocaleKey = keyof typeof ru;

export const PostList = ({ offset = 0, limit = 10 }: PostListProps) => {
    const { data, isLoading, error } = useGetPostsQuery({ offset, limit });
    const { lang } = useI18n();
    const t = (key: LocaleKey): string => translations[lang][key] || key;

    if (isLoading) return <Loader />;
    if (error) return <Error message={t('error_loading_posts')} />;
    if (!data || data.length === 0) return <div>{t('not_found')}</div>;

    return (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {data.map((post) => {
                if (!post) return null;
                const tags = Array.isArray(post.tags) && post.tags ? post.tags : [];
                return (
                    <li key={post.id}>
                        <PostCard
                            id={post.id}
                            title={post.title || ''}
                            description={post.description || ''}
                            author={post.author_id || ''}
                            date={post.created_at ? new Date(post.created_at).toLocaleDateString() : ''}
                            tags={tags}
                            status={post.status || ''}
                        />
                    </li>
                );
            })}
        </ul>
    );
}; 