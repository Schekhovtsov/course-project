import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { ToggleSidebar } from 'widgets/ToggleSidebar/ui/ToggleSidebar';

describe('Toggle sidebar button', () => {
    test('Проверяет, отображается ли toggle sidebar на экране', () => {
        const isCollapsed = true;
        const toggle = () => {};
        renderWithTranslation(
            <ToggleSidebar toggleSidebar={toggle} isCollapsed={isCollapsed} />
        );
        expect(screen.getByTestId('toggle-sidebar')).toBeInTheDocument();
    });
});
