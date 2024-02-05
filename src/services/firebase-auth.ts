import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut as fSignOut,
    onAuthStateChanged,
    NextOrObserver,
    User,
} from 'firebase/auth';

import { firebaseApp } from '../providers/firebase/firebase';
import type { Creds } from '../utils/types';
import { initiateUserStorage } from './firebase-db';

export const fbAuth = getAuth(firebaseApp);
export const fbSignUp = ({ email, password }: Creds) =>
    createUserWithEmailAndPassword(fbAuth, email, password).then(({ user }) => initiateUserStorage(user));
export const fbSignIn = ({ email, password }: Creds) => signInWithEmailAndPassword(fbAuth, email, password);
export const fbSignOut = () => fSignOut(fbAuth);
export const fbOnAuthChange = (callback: NextOrObserver<User>) => onAuthStateChanged(fbAuth, callback);
