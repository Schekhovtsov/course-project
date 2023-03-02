/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TEXT = 'text',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme = ButtonTheme.PRIMARY,
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
                styles[theme],
            ])}
        >
            {children}
        </button>
    );
};
