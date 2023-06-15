/* eslint-disable no-unused-vars */
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PAGE404 = '404',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE = 'article',
    ARTICLE_CREATE = 'create',
    ARTICLE_EDIT = 'edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE]: '/articles/', // + :id
    [AppRoutes.ARTICLE_CREATE]: '/articles/create',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.PAGE404]: '*',
};
