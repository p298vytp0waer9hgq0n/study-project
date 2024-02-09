import type { User } from 'firebase/auth';
import {
    DocumentData,
    DocumentReference,
    WithFieldValue,
    arrayRemove,
    arrayUnion,
    doc,
    getDoc,
    getFirestore,
    setDoc,
    updateDoc,
} from 'firebase/firestore';

import { firebaseApp } from '../providers/firebase/firebase';
import { USER_COLLECTION_NAME } from '../utils/constants';

export function initiateUserStorage(user: User) {
    addFbRecord(USER_COLLECTION_NAME, user.uid, { favorites: [], history: [] });
    return user;
}

export const firebaseDb = getFirestore(firebaseApp);

export const addFbRecord = <T extends WithFieldValue<DocumentData>>(
    collection: string,
    key: string,
    record: T,
): Promise<void> => setDoc(doc(firebaseDb, collection, key), record);

export const getFbDocRef = (key: string, record: string) => doc(firebaseDb, key, record);
export const getFbDoc = (docRef: DocumentReference) => getDoc(docRef);
export const addToFbArrayParam = <T>(docRef: DocumentReference, param: string, data: T) =>
    updateDoc(docRef, { [param]: arrayUnion(data) });
export const removeFromFbArrayParam = <T>(docRef: DocumentReference, param: string, data: T) =>
    updateDoc(docRef, { [param]: arrayRemove(data) });
