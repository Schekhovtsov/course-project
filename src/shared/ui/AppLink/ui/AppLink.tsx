/* eslint-disable no-unused-vars */
import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

export const AppLink = ({
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
}: AppLinkProps) => (
    <Link
        {...otherProps}
        to={to}
        className={classNames(styles.container, {}, [className, styles[theme]])}
    >
        {children}
    </Link>
);
