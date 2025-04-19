import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { useGoogleCallbackQuery } from '@features/oauth/api/oauthApi';

const OAuthCallbackPage: React.FC = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const code = params.get('code');
    const state = params.get('state') || undefined;

    const { data, error, isLoading } = useGoogleCallbackQuery({ code: code || '', state }, { skip: !code });

    useEffect(() => {
        if (data && data.user) {
            // Здесь можно сохранить пользователя в redux, если нужно
            navigate('/'); // редирект на главную после успешного входа
        }
    }, [data, navigate]);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка авторизации. Попробуйте ещё раз.</div>;
    return <div>Авторизация...</div>;
};

export default OAuthCallbackPage; 