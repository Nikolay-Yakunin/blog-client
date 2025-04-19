import { useTheme } from '@app/providers/ThemeProvider';
import { Button } from '@shared/ui/Button/Button';
import { useI18n } from '@app/providers/I18nProvider';
import ru from './locales/ru.json';
import en from './locales/en.json';

const dict = { ru, en };

export const ButtonChangeTheme = () => {
    const { theme, toggleTheme } = useTheme();
    const { lang } = useI18n();
    const t = dict[lang];
    return (
        <Button onClick={toggleTheme}>
            {theme === 'light' ? t.dark : t.light}
        </Button>
    );
}; 