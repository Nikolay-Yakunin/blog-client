import { useGetPostsQuery } from '@entities/post/api';

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
        <ul>
            {data.map((post) => (
                <li key={post.id} style={{ marginBottom: 24 }}>
                    <h3>{post.title}</h3>
                    <div>{post.description}</div>
                    <div>
                        <b>Автор:</b> {post.author_id} | <b>Дата:</b> {new Date(post.created_at).toLocaleDateString()}
                    </div>
                    <div>
                        <b>Теги:</b> {Array.isArray(post.tags) ? post.tags.join(', ') : ''}
                    </div>
                    <div>
                        <b>Статус:</b> {post.status}
                    </div>
                </li>
            ))}
        </ul>
    );
}; 