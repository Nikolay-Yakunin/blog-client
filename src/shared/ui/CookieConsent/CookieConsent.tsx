import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';
import { setCookie, getCookie } from '@shared/lib/cookie';
import { Button } from '@shared/ui/Button/Button';

const CONSENT_KEY = 'cookie_consent';

export const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!getCookie(CONSENT_KEY)) {
            setVisible(true);
        }
    }, []);

    const accept = () => {
        setCookie(CONSENT_KEY, '1');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles.banner}>
            <span>
                Мы используем cookie для улучшения работы сайта. Продолжая пользоваться сайтом, вы соглашаетесь с нашей политикой обработки данных.
            </span>
            <Button onClick={accept}>
                Принять
            </Button>
        </div>
    );
}; 