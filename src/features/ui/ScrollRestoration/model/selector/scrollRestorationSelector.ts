import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const selectPageScroll = (state: StateSchema) => state.scrollRestoration.scroll;

export const selectPageScrollByPath = createSelector(
    selectPageScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
);
