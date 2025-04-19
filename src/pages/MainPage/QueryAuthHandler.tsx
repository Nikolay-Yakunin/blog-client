import { useEffect } from 'react';
import { useAuth } from '@app/providers/useAuth';

export const QueryAuthHandler = () => {
    const { setUser } = useAuth();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const id = params.get('id');
        if (token && id) {
            const user = {
                id,
                username: params.get('username') || '',
                email: params.get('email') || '',
                provider: params.get('provider') || '',
                provider_id: params.get('provider_id') || '',
                avatar: params.get('avatar') || '',
                bio: params.get('bio') || '',
                role: params.get('role') || '',
                is_active: params.get('is_active') === 'true',
                last_login: params.get('last_login') || '',
                created_at: params.get('created_at') || '',
                updated_at: params.get('updated_at') || '',
                deleted_at: params.get('deleted_at'),
            };
            setUser(user, token);
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, [setUser]);

    return null;
}; 