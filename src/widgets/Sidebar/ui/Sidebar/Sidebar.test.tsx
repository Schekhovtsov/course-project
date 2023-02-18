import { screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
    test('Проверяет, отображается ли сайдбар на экране', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Проверяет, сворачивается ли сайдбар', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle-sidebar');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
