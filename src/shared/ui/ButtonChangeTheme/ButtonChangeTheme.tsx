import { useTheme } from '@app/providers/ThemeProvider';
import { Button } from '@shared/ui/Button/Button';

export const ButtonChangeTheme = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button onClick={toggleTheme}>
            {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
        </Button>
    );
}; 