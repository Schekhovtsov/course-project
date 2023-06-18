import { selectUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
} from '@/shared/constants/router';
import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/sidebar';

export const selectSidebarItems = createSelector(
    selectUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Home',
                Icon: HomeIcon,
            },
            {
                path: getRouteAbout(),
                text: 'About',
                Icon: AboutIcon,
            },
        ];

        if (userData) {
            sidebarItemsList.push({
                path: getRouteArticles(),
                text: 'Articles',
                Icon: ArticlesIcon,
                authOnly: true,
            });
        }

        return sidebarItemsList;
    }
);
