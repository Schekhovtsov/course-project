/* eslint-disable no-unused-vars */
import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { Page404 } from '@/pages/Page404';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesListPage } from '@/pages/ArticlesListPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { AppRoutes, RoutePath } from '@/shared/constants/router';
import { AppRouteProps } from '@/shared/types/router';

export const routerConfig: Record<AppRoutes, AppRouteProps> = {
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
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath[AppRoutes.ARTICLE_EDIT]}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutePath[AppRoutes.ARTICLE_CREATE]}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath[AppRoutes.ADMIN_PANEL]}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MODERATOR],
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath[AppRoutes.FORBIDDEN],
        element: <ForbiddenPage />,
    },
    [AppRoutes.PAGE404]: {
        path: RoutePath[AppRoutes.PAGE404],
        element: <Page404 />,
    },
};
