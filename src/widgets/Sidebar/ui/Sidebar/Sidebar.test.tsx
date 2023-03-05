import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Проверяет, отображается ли сайдбар на экране', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Проверяет, сворачивается ли сайдбар', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle-sidebar');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
