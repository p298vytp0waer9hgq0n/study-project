import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../utils/constants';

type Props = {
    requiresGuest?: boolean;
};

export function ProtectedRoute({ requiresGuest = false }: Props) {
    const { user } = useAuth();
    const userIsGuest = !user;
    const redirect = requiresGuest ? ROUTES.MAIN : ROUTES.SIGNIN;
    return userIsGuest === requiresGuest ? <Outlet /> : <Navigate to={redirect} />;
}
