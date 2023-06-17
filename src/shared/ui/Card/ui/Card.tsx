import { HTMLAttributes, ReactNode } from 'react';

import styles from './Card.module.scss';

import { classNames } from '@/shared/lib/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    max?: boolean;
}

export const Card = ({
    className,
    children,
    max = false,
    ...otherProps
}: CardProps) => (
    <div
        {...otherProps}
        className={classNames(styles.container, { [styles.max]: max }, [
            className,
        ])}
    >
        {children}
    </div>
);
