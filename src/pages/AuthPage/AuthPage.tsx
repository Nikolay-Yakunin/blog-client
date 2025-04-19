import React from 'react';
import { OAuthButtons } from '@features/oauth/ui/OAuthButtons';
import { useI18n } from '@app/providers/I18nProvider';
import ru from './locales/ru.json';
import en from './locales/en.json';

const locales = { ru, en };

const AuthPage: React.FC = () => {
    const { lang } = useI18n();
    const t = locales[lang] || locales.ru;

    return (
        <div>
            <h1>{t.title}</h1>
            <OAuthButtons />
        </div>
    );
};

export default AuthPage; 