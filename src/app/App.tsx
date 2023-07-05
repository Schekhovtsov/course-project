import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { initAuthData, selectUserIsMounted } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Loader } from '@/shared/ui/Loader';
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
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="body">
                    <Sidebar />
                    {mounted ? <AppRouter /> : null}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
