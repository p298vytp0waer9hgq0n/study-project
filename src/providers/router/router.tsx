import { createBrowserRouter } from 'react-router-dom';

import { App } from '../../App';
import { ProtectedRoute } from '../../components/protected/protected';
import { Favorite } from '../../pages/favorite';
import { Home } from '../../pages/home';
import { SignIn } from '../../pages/sign-in';
import { SignOut } from '../../pages/sign-out';
import { SignUp } from '../../pages/sign-up';

export const appRouter = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                element: <ProtectedRoute guest />,
                children: [
                    {
                        path: '/signup',
                        element: <SignUp />,
                    },
                    {
                        path: '/signin',
                        element: <SignIn />,
                    },
                ],
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '/favorite',
                        element: <Favorite />,
                    },
                    {
                        path: '/signout',
                        element: <SignOut />,
                    },
                ],
            },
        ],
    },
]);
