import { ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames';

import styles from './StickyContentLayout.module.scss';

interface StickyContentProps {
    className?: string;
    content: ReactElement;
    left?: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = ({
    className,
    content,
    left,
    right,
}: StickyContentProps) => (
    <div className={classNames(styles.container, {}, [className])}>
        {left && <div className={styles.left}>{left}</div>}
        <div className={styles.content}>{content}</div>
        {right && <div className={styles.right}>{right}</div>}
    </div>
);
