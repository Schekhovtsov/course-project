import { lazy } from 'react';

export const ArticlesListPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./ArticlesListPage')), 750);
        })
);
