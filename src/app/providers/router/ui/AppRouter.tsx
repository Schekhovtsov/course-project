import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/Loader/Loader';

export function AppRouter() {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <div className="page">
                            <Suspense fallback={<Loader />}>
                                {element}
                            </Suspense>
                        </div>
                    }
                />
            ))}
        </Routes>
    );
}
