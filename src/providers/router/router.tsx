import { createBrowserRouter } from 'react-router-dom';

import { App } from '../../App';
import { ProtectedRoute } from '../../components/protected/protected';
import { SignIn } from '../../pages/authorization/sign-in';
import { SignOut } from '../../pages/authorization/sign-out';
import { SignUp } from '../../pages/authorization/sign-up';
import { Favorite } from '../../pages/favorites/favorite';
import { History } from '../../pages/history/history';
import { Home } from '../../pages/home/home';
import { RecipePage } from '../../pages/recipe/recipe';
import { Search } from '../../pages/search/search';

export const appRouter = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/recipe/:id',
                element: <RecipePage />,
            },
            {
                path: '/search/:search',
                element: <Search />,
            },
            {
                element: <ProtectedRoute requiresGuest />,
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
                        path: '/history',
                        element: <History />,
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
