import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

type Props = {
    guest?: boolean;
};

export function ProtectedRoute({ guest = false }: Props) {
    const { user } = useAuth();
    const redirect = !guest ? '/signin' : '/';
    return !user != !guest ? <Outlet /> : <Navigate to={redirect} />;
}
