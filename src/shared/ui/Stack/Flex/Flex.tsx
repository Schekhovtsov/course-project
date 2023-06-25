import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { ModsType } from '@/shared/lib/classNames/classNames';

import styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = 5 | 10 | 15 | 20 | 25 | 30;

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;
export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    5: styles.gap5,
    10: styles.gap10,
    15: styles.gap15,
    20: styles.gap20,
    25: styles.gap25,
    30: styles.gap30,
};

export const Flex = ({
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = 10,
    max,
    ...otherProps
}: FlexProps) => {
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gapClasses[gap],
    ];

    const mods: ModsType = {
        [styles.max]: max,
    };

    return (
        <div
            className={classNames(styles.container, mods, classes)}
            {...otherProps}
        >
            {children}
        </div>
    );
};
