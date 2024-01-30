import { useEffect } from 'react';

import { fbOnAuthChange } from '../api/firebase-auth';
import { useAppDispatch, useAppSelector } from '../providers/store/hooks';
import { setUser, signInThunk, signOutThunk, signUpThunk } from '../services/user-slice';
import { Creds } from '../utils/types';

export function useAuth() {
    //TODO: add ls api
    const dispatch = useAppDispatch();

    const { user } = useAppSelector((store) => store.user);
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

    return { user, signIn, signOut, signUp };
}
