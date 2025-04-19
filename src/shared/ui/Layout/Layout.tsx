import { Outlet } from 'react-router';
import styles from './Layout.module.css';
import { ButtonChangeTheme } from '@shared/ui/ButtonChangeTheme/ButtonChangeTheme';
import { ButtonChangeLang } from '@shared/ui/ButtonChangeLang/ButtonChangeLang';
import { useI18n } from '@app/providers/I18nProvider';
import ru from './locales/ru.json';
import en from './locales/en.json';

const dict = { ru, en };

const Header = ({ title }: { title: string }) => (
    <header className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{title}</span>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <ButtonChangeTheme />
                <ButtonChangeLang />
            </div>
        </div>
    </header>
);

const Sidebar = ({ sidebar }: { sidebar: string }) => (
    <aside className={styles.sidebar}>
        {sidebar}
    </aside>
);

const Footer = ({ footer }: { footer: string }) => (
    <footer className={styles.footer}>
        {footer}
    </footer>
);

const Layout = () => {
    const { lang } = useI18n();
    const t = dict[lang];
    return (
        <div className={styles.layout}>
            <Header title={t.title} />
            <div className={styles.layout__body}>
                <Sidebar sidebar={t.sidebar} />
                <main className={styles.layout__content}>
                    <Outlet />
                </main>
            </div>
            <Footer footer={t.footer} />
        </div>
    );
};

export default Layout; 