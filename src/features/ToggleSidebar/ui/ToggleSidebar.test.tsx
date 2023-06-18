import { componentRender } from '@/shared/lib/tests/componentRender';
import { screen } from '@testing-library/react';

import { ToggleSidebar } from './ToggleSidebar';

describe('Toggle sidebar button', () => {
    test('Проверяет, отображается ли toggle sidebar на экране', () => {
        const isCollapsed = true;
        const toggle = () => {};
        componentRender(
            <ToggleSidebar toggleSidebar={toggle} isCollapsed={isCollapsed} />
        );
        expect(screen.getByTestId('toggle-sidebar')).toBeInTheDocument();
    });
});
