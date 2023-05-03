import { useCallback, useRef } from 'react';

export const useDebounce = (
    // eslint-disable-next-line no-unused-vars
    callback: (...args: any[]) => void,
    delay: number
) => {
    const timer = useRef<any>(false);

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay]
    );
};
