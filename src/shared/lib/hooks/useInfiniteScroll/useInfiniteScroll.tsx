import { MutableRefObject, useEffect } from 'react';

export interface useInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
    callback,
    triggerRef,
    wrapperRef,
}: useInfiniteScrollProps) => {
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '40px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);

            return () => {
                if (observer) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer?.unobserve(triggerRef.current);
                }
            };
        }
    }, [callback, triggerRef, wrapperRef]);
};
