import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'ru';

interface I18nContextProps {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>('ru');

    return (
        <I18nContext.Provider value={{ lang, setLang }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error('useI18n must be used within I18nProvider');
    return ctx;
}; 