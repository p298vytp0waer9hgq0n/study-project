import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Header } from './components/header/header';
import { store } from './providers/store/store';

import './App.css';

export function App() {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
        </Provider>
    );
}
