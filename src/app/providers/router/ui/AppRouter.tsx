/* eslint-disable react/jsx-wrap-multilines */
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { selectUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/Loader/Loader';

export const AppRouter = memo(() => {
    const isAuth = useSelector(selectUserAuthData);

    const routes = useMemo(
        () =>
            Object.values(routeConfig).filter((route) => {
                if (route.authOnly && !isAuth) {
                    return false;
                }

                return true;
            }),
        [isAuth]
    );

    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <ErrorBoundary>
                            <div className="page">
                                <Suspense fallback={<Loader />}>
                                    {element}
                                </Suspense>
                            </div>
                        </ErrorBoundary>
                    }
                />
            ))}
        </Routes>
    );
});
