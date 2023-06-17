/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { AppLinkTheme } from '../model/consts/consts';

import styles from './AppLink.module.scss';

import { classNames } from '@/shared/lib/classNames';

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
