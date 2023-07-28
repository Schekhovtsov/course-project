import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    test('Проверяет, отображается ли кнопка на экране', () => {
        render(<Button>Test</Button>);
        expect(screen.getByLabelText('button')).toBeInTheDocument();
    });

    test('Проверяет, применяется ли тема к кнопке', () => {
        render(<Button variant="secondary">Test</Button>);
        expect(screen.getByLabelText('button')).toHaveClass('secondary');
    });
});
