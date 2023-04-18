import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

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
