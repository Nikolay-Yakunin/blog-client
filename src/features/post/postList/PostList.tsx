import { useGetPostsQuery } from '@entities/post/api';
import { PostCard } from './PostCard';

interface PostListProps {
    offset?: number;
    limit?: number;
}

export const PostList = ({ offset = 0, limit = 10 }: PostListProps) => {
    const { data, isLoading, error } = useGetPostsQuery({ offset, limit });

    if (isLoading) return <div>Загрузка постов...</div>;
    if (error) return <div style={{ color: 'red' }}>Ошибка загрузки постов</div>;
    if (!data || data.length === 0) return <div>Посты не найдены</div>;

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