import { useAuth } from '../hooks/useAuth';

export function Home() {
    const { user } = useAuth();
    return (
        <>
            <p>Main Page</p>
            {user && <p>{`You are logged in as ${user.email}`}</p>}
        </>
    );
}
