import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { Sidebar } from './Sidebar';

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
    });

    test('test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.queryByTestId('sidebar-toggle') as HTMLElement;
        expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        const sidebar = screen.queryByTestId('sidebar');

        if (sidebar) {
            if (sidebar.classList.contains('collapsedRedesigned')) {
                expect(sidebar).toHaveClass('collapsedRedesigned');
            } else if (sidebar.classList.contains('collapsed')) {
                expect(sidebar).toHaveClass('collapsed');
            } else {
                fail('Unexpected class');
            }
        } else {
            fail('Sidebar element not found');
        }
    });
});
