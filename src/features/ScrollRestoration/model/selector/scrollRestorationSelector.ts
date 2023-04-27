import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const selectPageScroll = (state: StateSchema) => state.scrollRestoration.scroll;

export const selectPageScrollByPath = createSelector(
    selectPageScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
);
