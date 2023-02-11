import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

function App() {
    const { theme } = useTheme();
    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="body">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
}

export default App;
