import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation, } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';
describe('Sidebar', function () {
    test('with only first param', function () {
        renderWithTranslation(_jsx(Sidebar, {}, void 0));
        expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });
    test('test toggle', function () {
        renderWithTranslation(_jsx(Sidebar, {}, void 0));
        var toggleBtn = screen.queryByTestId('sidebar-toggle');
        expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.queryByTestId('sidebar')).toHaveClass('collapsed');
    });
});
