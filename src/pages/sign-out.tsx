import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export function SignOut() {
    const { signOut } = useAuth();

    signOut();

    return <Navigate to="/" />;
}
