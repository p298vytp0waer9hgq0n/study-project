import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { fbAuth, fbOnAuthChange, fbSignIn, fbSignOut, fbSignUp } from '../api/firebase-auth';
import { useAppDispatch, useAppSelector } from '../providers/store/hooks';
import { signInThunk, signOutThunk } from '../services/user-slice';
import { Creds } from '../utils/types';

export function useAuth() {
    //TODO: add ls api
    const dispatch = useAppDispatch();
    const [user, setUser] = useState<User | null>(fbAuth.currentUser);

    // const { user } = useAppSelector((store) => store.user);
    function signIn({ email, password }: Creds) {
        dispatch(signInThunk({ email, password }));
    }
    function signOut() {
        dispatch(signOutThunk());
    }
    const signUp = fbSignUp;

    useEffect(() => {
        const unlisten = fbOnAuthChange((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => {
            unlisten();
        };
    }, []);

    return { user, signIn, signOut, signUp };
}
