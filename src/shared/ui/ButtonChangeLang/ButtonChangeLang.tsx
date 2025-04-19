import { useI18n } from '@app/providers/I18nProvider';
import { Button } from '@shared/ui/Button/Button';
import ru from './locales/ru.json';
import en from './locales/en.json';

const dict = { ru, en };

export const ButtonChangeLang = () => {
    const { lang, setLang } = useI18n();
    const nextLang = lang === 'ru' ? 'en' : 'ru';
    const t = dict[lang];
    return (
        <Button onClick={() => setLang(nextLang)}>
            {t.switch}
        </Button>
    );
}; 