import { Outlet, Link } from 'react-router';
import styles from './Layout.module.css';
import { ButtonChangeTheme } from '@shared/ui/ButtonChangeTheme/ButtonChangeTheme';
import { ButtonChangeLang } from '@shared/ui/ButtonChangeLang/ButtonChangeLang';
import { useI18n } from '@app/providers/I18nProvider';
import ru from './locales/ru.json';
import en from './locales/en.json';
import { Button } from '@shared/ui/Button/Button';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '@app/providers/useAuth';
import { Avatar } from '@shared/ui/Avatar/Avatar';

const dict = { ru, en };

const Header = ({ title }: { title: string }) => {
    const { isAuth, user } = useAuth();
    return (
        <header className={styles.header}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{title}</span>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <ButtonChangeTheme />
                    <ButtonChangeLang />
                    {!isAuth && (
                        <Link to="/auth">
                            <Button><FaUser style={{ marginRight: 8 }} />{dict[useI18n().lang].login || 'Войти'}</Button>
                        </Link>
                    )}
                    {isAuth && user?.avatar && (
                        <Avatar src={user.avatar} userId={user.id} size={40} />
                    )}
                </div>
            </div>
        </header>
    );
};

const Sidebar = ({ sidebar }: { sidebar: any }) => (
    <aside className={styles.sidebar}>
        <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link to="/">{sidebar.main}</Link></li>
                <li><Link to="/posts">{sidebar.posts}</Link></li>
                <li><Link to="/post/create">{sidebar.create}</Link></li>
                <li><Link to="/profile">{sidebar.profile}</Link></li>
            </ul>
        </nav>
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