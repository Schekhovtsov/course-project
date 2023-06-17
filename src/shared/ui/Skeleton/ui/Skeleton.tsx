import { CSSProperties } from 'react';

import styles from './Skeleton.module.scss';

import { classNames } from '@/shared/lib/classNames';

interface SkeletonProps {
    className?: string;
    height: string | number;
    width: string | number;
    borderRadius?: string;
}

export const Skeleton = ({
    className,
    height,
    width,
    borderRadius,
}: SkeletonProps) => {
    const style: CSSProperties = {
        height,
        width,
        borderRadius,
    };

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            style={style}
        />
    );
};
