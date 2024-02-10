import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../providers/store/hooks';
import { setUser, signInThunk, signOutThunk, signUpThunk } from '../providers/store/slices/user-slice';
import { fbOnAuthChange } from '../services/firebase-auth';
import type { Creds } from '../utils/types';

export function useAuth() {
    const dispatch = useAppDispatch();

    const { user, isLoading } = useAppSelector((store) => store.user);
    function signUp({ email, password }: Creds) {
        dispatch(signUpThunk({ email, password }));
    }

    function signIn({ email, password }: Creds) {
        dispatch(signInThunk({ email, password }));
    }

    function signOut() {
        dispatch(signOutThunk());
    }

    useEffect(() => {
        const unlisten = fbOnAuthChange((user) => {
            dispatch(setUser(user));
        });

        return () => {
            unlisten();
        };
    }, [dispatch]);

    return { user, signIn, signOut, signUp, isLoading };
}
