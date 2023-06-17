import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('Проверяет, отображается ли кнопка на экране', () => {
        render(<Button>Test</Button>);
        expect(screen.getByLabelText('button')).toBeInTheDocument();
    });

    test('Проверяет, применяется ли тема к кнопке', () => {
        render(<Button theme={ButtonTheme.SECONDARY}>Test</Button>);
        expect(screen.getByLabelText('button')).toHaveClass('secondary');
    });
});
