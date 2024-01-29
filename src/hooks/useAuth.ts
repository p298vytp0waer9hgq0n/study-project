import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { fbAuth, fbOnAuthChange, fbSignIn, fbSignOut, fbSignUp } from '../api/firebase-auth';

export function useAuth() {
    //TODO: add ls api
    const [user, setUser] = useState<User | null>(fbAuth.currentUser);

    const signIn = fbSignIn;
    const signOut = fbSignOut;
    const signUp = fbSignUp;

    useEffect(() => {
        const unlisten = fbOnAuthChange(setUser);
        return () => {
            unlisten();
        };
    }, []);

    return { user, signIn, signOut, signUp };
}
