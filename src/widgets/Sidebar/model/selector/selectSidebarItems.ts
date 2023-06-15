import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from '@/entities/User';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from '@/shared/constants/router';

export const selectSidebarItems = createSelector(
    selectUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Home',
                Icon: HomeIcon,
            },
            {
                path: RoutePath.about,
                text: 'About',
                Icon: AboutIcon,
            },
        ];

        if (userData) {
            sidebarItemsList.push({
                path: RoutePath.articles,
                text: 'Articles',
                Icon: ArticlesIcon,
                authOnly: true,
            });
        }

        return sidebarItemsList;
    }
);
