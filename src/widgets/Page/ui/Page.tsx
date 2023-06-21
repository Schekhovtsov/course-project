import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    scrollRestorationActions,
    selectPageScrollByPath,
} from '@/features/ScrollRestoration';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { TestProps } from '@/shared/types/testProps';

import styles from './Page.module.scss';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
        'data-testid': datatestid,
    } = props;

    const dispatch = useAppDispatch();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const { pathname } = useLocation();

    const scrollPosition = useSelector(
        (state: StateSchema) => selectPageScrollByPath(state, pathname)
        // eslint-disable-next-line function-paren-newline
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollRestorationActions.setScroll({
                path: pathname,
                position: e.currentTarget.scrollTop,
            })
        );
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(styles.container, {}, [className])}
            onScroll={onScrollHandler}
            data-testid={datatestid ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div className={styles.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
};
