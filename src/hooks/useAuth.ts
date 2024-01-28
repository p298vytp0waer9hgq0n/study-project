import { fbAuth, fbSignIn, fbSignOut, fbSignUp } from '../api/firebase-auth';

export function useAuth() {
    //TODO: add ls api
    const user = fbAuth.currentUser;
    const signIn = fbSignIn;
    const signOut = fbSignOut;
    const signUp = fbSignUp;

    return { user, signIn, signOut, signUp };
}
