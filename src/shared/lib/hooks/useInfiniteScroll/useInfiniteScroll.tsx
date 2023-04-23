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
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '40px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);

            return () => {
                if (observer) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer?.unobserve(triggerElement);
                }
            };
        }
    }, [callback, triggerRef, wrapperRef]);
};
