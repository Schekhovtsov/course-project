/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';

import styles from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'text';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    disabled?: boolean;
    children: ReactNode;
}

export const Button = ({
    className,
    children,
    variant = 'primary',
    disabled,
    ...otherProps
}: ButtonProps) => {
    const mods = {
        [styles.disabled]: disabled,
    };

    return (
        <button
            {...otherProps}
            type="button"
            aria-label="button"
            disabled={disabled}
            className={classNames(styles.container, mods, [
                styles.button,
                className,
                styles[variant],
            ])}
        >
            {children}
        </button>
    );
};
