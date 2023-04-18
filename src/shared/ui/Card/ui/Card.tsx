import { classNames } from 'shared/lib/classNames';
import { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = ({ className, children, ...otherProps }: CardProps) => (
    <div
        {...otherProps}
        className={classNames(styles.container, {}, [className])}
    >
        {children}
    </div>
);
