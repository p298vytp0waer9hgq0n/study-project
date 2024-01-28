import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export function SignOut() {
    const { signOut } = useAuth();

    signOut().catch((err) => console.error(err));

    return <Navigate to="/" />;
}
