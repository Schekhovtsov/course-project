import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './Card.module.scss';

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
