import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

type Props = {
    requiresGuest?: boolean;
};

export function ProtectedRoute({ requiresGuest = false }: Props) {
    const { user } = useAuth();
    const userIsGuest = !user;
    const redirect = requiresGuest ? '/' : '/signin';
    return userIsGuest === requiresGuest ? <Outlet /> : <Navigate to={redirect} />;
}
