import { useI18n } from '@app/providers/I18nProvider';
import { Button } from '@shared/ui/Button/Button';

export const ButtonChangeLang = () => {
    const { lang, setLang } = useI18n();
    const nextLang = lang === 'ru' ? 'en' : 'ru';
    return (
        <Button onClick={() => setLang(nextLang)}>
            {lang === 'ru' ? 'Сменить на English' : 'Switch to Russian'}
        </Button>
    );
}; 