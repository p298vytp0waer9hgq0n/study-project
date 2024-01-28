import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut as fSignOut,
} from 'firebase/auth';

import { firebaseApp } from '../providers/firebase/firebase';

type Creds = {
    email: string;
    password: string;
};

export const fbAuth = getAuth(firebaseApp);
export const fbSignUp = ({ email, password }: Creds) => createUserWithEmailAndPassword(fbAuth, email, password);
export const fbSignIn = ({ email, password }: Creds) => signInWithEmailAndPassword(fbAuth, email, password);
export const fbSignOut = () => fSignOut(fbAuth);
