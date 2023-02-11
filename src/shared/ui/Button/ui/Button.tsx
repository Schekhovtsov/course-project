/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme = ThemeButton.PRIMARY,
    ...otherProps
}: ButtonProps) => (
    <button
        {...otherProps}
        type="button"
        className={classNames(styles.container, {}, [className, styles[theme]])}
    >
        {children}
    </button>
);
