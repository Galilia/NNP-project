import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

beforeEach(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
        return {
            matches: query === '(max-width: 768px)', // always return true or false based on the query
            addListener: jest.fn(),
            removeListener: jest.fn(),
        };
    });
});

afterEach(() => {
    // @ts-ignore
    delete window.matchMedia;
});

describe('Sidebar', () => {
    test('with only first param', () => {
        componentRender(<Sidebar />);
        expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
        // screen.debug();
    });

    test('test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.queryByTestId('sidebar-toggle') as HTMLElement;
        expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.queryByTestId('sidebar')).toHaveClass('collapsed');
    });
});
