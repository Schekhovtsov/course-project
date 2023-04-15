import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from 'entities/User';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';

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
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Articles',
                    Icon: ProfileIcon,
                    authOnly: true,
                }
            );
        }

        return sidebarItemsList;
    }
);