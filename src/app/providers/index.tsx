import { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import { ThemeProvider } from './ThemeProvider';
import { I18nProvider } from './I18nProvider';
import { SnackbarProvider } from './SnackbarProvider';

export const Providers = ({ children }: { children: ReactNode }) => (
    <StoreProvider>
        <ThemeProvider>
            <I18nProvider>
                <SnackbarProvider>
                    {children}
                </SnackbarProvider>
            </I18nProvider>
        </ThemeProvider>
    </StoreProvider>
); 