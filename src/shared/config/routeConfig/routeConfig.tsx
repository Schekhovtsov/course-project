/* eslint-disable no-unused-vars */
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Page404 } from 'pages/Page404';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PAGE404 = '404',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PAGE404]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.PAGE404]: {
        path: RoutePath[AppRoutes.PAGE404],
        element: <Page404 />,
    },
};
