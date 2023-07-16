/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';

import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: 'primary' | 'red';
    children: ReactNode;
    activeClassName?: string;
}

export const AppLink = ({
    to,
    className,
    variant = 'primary',
    children,
    activeClassName = '',
    ...otherProps
}: AppLinkProps) => (
    <NavLink
        {...otherProps}
        to={to}
        className={({ isActive }) =>
            classNames(
                styles.container,
                {
                    [activeClassName]: isActive,
                },
                [className, styles[variant]]
            )
        // eslint-disable-next-line react/jsx-curly-newline
        }
    >
        {children}
    </NavLink>
);
