import { useI18n } from '@app/providers/I18nProvider';
import { PostList } from '@features/post/postList';
import ru from './locales/ru.json';
import en from './locales/en.json';

const translations = { ru, en };
type LocaleKey = keyof typeof ru;

export const PostListWidget = () => {

    const { lang } = useI18n();
    const t = (key: LocaleKey): string => translations[lang][key] || key;
    return (
        <div>
            <h2>{t('title')}</h2>
            <PostList />
        </div>
    );
}; 
