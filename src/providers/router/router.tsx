import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '../../App';
import { ProtectedRoute } from '../../components/protected/protected';
import { SignIn } from '../../pages/authorization/sign-in';
import { SignOut } from '../../pages/authorization/sign-out';
import { SignUp } from '../../pages/authorization/sign-up';
import { Favorite } from '../../pages/favorites/favorite';
import { History } from '../../pages/history/history';
import { NotFound } from '../../pages/not-found/not-found';
import { RecipePage } from '../../pages/recipe/recipe';
import { Search } from '../../pages/search/search';
import { ROUTES } from '../../utils/constants';

// eslint-disable-next-line react-refresh/only-export-components
const Home = lazy(() => import('../../pages/home/home'));

export const appRouter = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: ROUTES.MAIN,
                element: <Home />,
            },
            {
                path: `${ROUTES.RECIPE}/:id`,
                element: <RecipePage />,
            },
            {
                path: `${ROUTES.SEARCH}/:search`,
                element: <Search />,
            },
            {
                element: <ProtectedRoute requiresGuest />,
                children: [
                    {
                        path: ROUTES.SIGNUP,
                        element: <SignUp />,
                    },
                    {
                        path: ROUTES.SIGNIN,
                        element: <SignIn />,
                    },
                ],
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: ROUTES.FAVORITES,
                        element: <Favorite />,
                    },
                    {
                        path: ROUTES.HISTORY,
                        element: <History />,
                    },
                    {
                        path: ROUTES.SIGNOUT,
                        element: <SignOut />,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
