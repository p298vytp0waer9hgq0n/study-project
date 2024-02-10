import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../utils/constants';
import { Loading } from '../loading/loading';

type Props = {
    requiresGuest?: boolean;
};

export function ProtectedRoute({ requiresGuest = false }: Props) {
    const { user, isLoading } = useAuth();
    const userIsGuest = !user;
    const redirect = requiresGuest ? ROUTES.MAIN : ROUTES.SIGNIN;
    if (isLoading) {
        return <Loading />;
    }
    return userIsGuest === requiresGuest ? <Outlet /> : <Navigate to={redirect} />;
}
