import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { useGoogleCallbackQuery } from '@features/oauth/api/oauthApi';
import { Error } from '@shared/ui/Error/Error';
import ru from './locales/ru.json';
import en from './locales/en.json';
import { useI18n } from '@app/providers/I18nProvider';

const translations = { ru, en };
type LocaleKey = keyof typeof ru;

const OAuthCallbackPage: React.FC = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const { lang } = useI18n();
    const t = (key: LocaleKey): string => translations[lang][key] || key;
    const code = params.get('code');
    const state = params.get('state') || undefined;

    const { data, error, isLoading } = useGoogleCallbackQuery({ code: code || '', state }, { skip: !code });

    useEffect(() => {
        if (data && data.user) {
            navigate('/');
        }
    }, [data, navigate]);

    if (isLoading) return <div>{t('loading')}</div>;
    if (error) return <Error message={t('error')} />;
    return <div>{t('auth_in_progress')}</div>;
};

export default OAuthCallbackPage; 