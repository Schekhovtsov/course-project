/* eslint-disable react/jsx-wrap-multilines */
import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    AppRouteProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/Loader/Loader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<Loader />}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
