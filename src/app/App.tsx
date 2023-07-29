import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { initAuthData, selectUserIsMounted } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { ToggledFeatures } from '@/shared/lib/features/ToggledFeatures';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

const App = memo(() => {
    const dispatch = useAppDispatch();
    const mounted = useSelector(selectUserIsMounted);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!mounted) {
        return (
            <div className="app_redesigned">
                <AppLoaderLayout />
            </div>
        );
    }

    return (
        <ToggledFeatures
            feature="isAppRedesigned"
            on={
                <div className="app_redesigned">
                    <Suspense fallback="">
                        <MainLayout
                            content={<AppRouter />}
                            header={<Navbar />}
                            sidebar={<Sidebar />}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div className="app">
                    <Suspense fallback="">
                        <Navbar />
                        <div className="body">
                            <Sidebar />
                            {mounted ? <AppRouter /> : null}
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
});

export default withTheme(App);
