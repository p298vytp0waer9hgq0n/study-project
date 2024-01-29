import { Outlet } from 'react-router-dom';

import { Header } from './components/header/header';

import './App.css';

export function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
