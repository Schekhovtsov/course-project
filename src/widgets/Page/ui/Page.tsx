import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { toggleFeatures } from '@/shared/lib/features/toggleFeatures';
import { TestProps } from '@/shared/types/testProps';

import styles from './Page.module.scss';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
}

export const Page = (props: PageProps) => {
    const { className, children, 'data-testid': datatestid } = props;

    return (
        <main
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => styles.containerRedesigned,
                    off: () => styles.container,
                }),
                {},
                [className]
            )}
            data-testid={datatestid ?? 'Page'}
        >
            {children}
        </main>
    );
};
