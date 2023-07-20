import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { initAuthData, selectUserIsMounted } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames';
import { ToggledFeatures } from '@/shared/lib/features/ToggledFeatures';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

function App() {
    const dispatch = useAppDispatch();
    const mounted = useSelector(selectUserIsMounted);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!mounted) {
        return <Loader />;
    }

    return (
        <ToggledFeatures
            feature="isAppRedesigned"
            on={
                <div className={classNames('app_redesigned', {}, [])}>
                    <Suspense fallback="">
                        <MainLayout
                            content={<AppRouter />}
                            header={<Navbar />}
                            sidebar={<Sidebar />}
                            // eslint-disable-next-line i18next/no-literal-string
                            toolbar={<div>T</div>}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div className={classNames('app', {}, [])}>
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
}

export default App;
