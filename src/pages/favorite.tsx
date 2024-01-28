import { useAuth } from '../hooks/useAuth';

export function Favorite() {
    const { user } = useAuth();
    console.log(user);
    return <p>this is protected favorite page</p>;
}
