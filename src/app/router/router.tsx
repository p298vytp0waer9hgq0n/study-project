import { createBrowserRouter } from 'react-router-dom';

import { App } from '..';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
]);
