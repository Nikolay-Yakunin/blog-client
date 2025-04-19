import { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import { ThemeProvider } from './ThemeProvider';
import { I18nProvider } from './I18nProvider';
import { SnackbarProvider } from './SnackbarProvider';
import { AuthProvider } from './AuthProvider';

export const Providers = ({ children }: { children: ReactNode }) => (
    <StoreProvider>
        <ThemeProvider>
            <I18nProvider>
                <SnackbarProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </SnackbarProvider>
            </I18nProvider>
        </ThemeProvider>
    </StoreProvider>
); 