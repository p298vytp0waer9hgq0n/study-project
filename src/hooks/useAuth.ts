import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../providers/store/hooks';
import { setData, setUser, signInThunk, signOutThunk, signUpThunk } from '../providers/store/slices/user-slice';
import { fbOnAuthChange } from '../services/firebase-auth';
import { getFbDoc, getFbDocRef } from '../services/firebase-db';
import { USER_COLLECTION_NAME } from '../utils/constants';
import type { Creds } from '../utils/types';

export function useAuth() {
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
            if (user) {
                const userStorageRef = getFbDocRef(USER_COLLECTION_NAME, user.uid);
                getFbDoc(userStorageRef).then((snap) => {
                    if (snap.exists()) {
                        dispatch(setData(snap.data()));
                    }
                });
            }
        });

        return () => {
            unlisten();
        };
    }, [dispatch]);

    return { user, signIn, signOut, signUp };
}
