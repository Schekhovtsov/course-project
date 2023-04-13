/* eslint-disable no-unused-vars */
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { Page404 } from 'pages/Page404';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesListPage } from 'pages/ArticlesListPage';
import { ArticlePage } from 'pages/ArticlePage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PAGE404 = '404',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE = 'article',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE]: '/articles/', // + :id
    [AppRoutes.PAGE404]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath[AppRoutes.PROFILE]}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath[AppRoutes.ARTICLES],
        element: <ArticlesListPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: `${RoutePath[AppRoutes.ARTICLE]}:id`,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.PAGE404]: {
        path: RoutePath[AppRoutes.PAGE404],
        element: <Page404 />,
    },
};
