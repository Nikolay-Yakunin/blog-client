import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
    it('рендерит по умолчанию', () => {
        const { asFragment } = render(<Loader />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('рендерит с кастомным размером', () => {
        const { asFragment } = render(<Loader size={60} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('рендерит корректно в тёмной теме', () => {
        const { asFragment } = render(
            <div className="theme-dark">
                <Loader />
            </div>
        );
        expect(asFragment()).toMatchSnapshot();
    });
}); 