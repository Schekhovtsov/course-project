/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    ...otherProps
}: ButtonProps) => (
    <button
        {...otherProps}
        type="button"
        aria-label="button"
        className={classNames(styles.container, {}, [
            styles.button,
            className,
            styles[theme],
        ])}
    >
        {children}
    </button>
);
