import { Suspense, createContext, useMemo, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { BoundaryFallback } from './components/boundary-fallback/boundary-fallback';
import { Header } from './components/header/header';
import { Loading } from './components/loading/loading';
import { store } from './providers/store/store';

import './App.css';

type Theme = 'very light' | 'light';

export type AppContextType = {
    theme: Theme;
    setTheme: (arg: Theme) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export function App() {
    const [theme, setTheme] = useState<Theme>('very light');
    const contextValue = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme, setTheme],
    );

    return (
        <ErrorBoundary FallbackComponent={BoundaryFallback}>
            <Provider store={store}>
                <AppContext.Provider value={contextValue}>
                    <Suspense fallback={<Loading />}>
                        <Header />
                        <Outlet />
                    </Suspense>
                </AppContext.Provider>
            </Provider>
        </ErrorBoundary>
    );
}
