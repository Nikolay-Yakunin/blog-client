import { render } from '@testing-library/react';
import { OAuthButtons } from '../OAuthButtons';
import { I18nProvider } from 'app/providers/I18nProvider';

describe('OAuthButtons', () => {
    it('рендерит кнопки по умолчанию', () => {
        const { asFragment } = render(
            <I18nProvider>
                <OAuthButtons />
            </I18nProvider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('рендерит состояние загрузки', () => {
        const { asFragment } = render(
            <I18nProvider>
                <OAuthButtons loading />
            </I18nProvider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('рендерит ошибку', () => {
        const { asFragment } = render(
            <I18nProvider>
                <OAuthButtons error="Ошибка авторизации" />
            </I18nProvider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
}); 