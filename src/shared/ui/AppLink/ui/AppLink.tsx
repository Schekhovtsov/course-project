/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    to,
    className,
    theme,
    children,
    ...otherProps
}) => (
    <Link
        {...otherProps}
        to={to}
        className={classNames(styles.container, {}, [className, styles[theme]])}
    >
        {children}
    </Link>
);
