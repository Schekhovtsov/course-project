import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { selectUserIsMounted, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AppRouter } from './providers/router';

function App() {
    const dispatch = useAppDispatch();
    const mounted = useSelector(selectUserIsMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
