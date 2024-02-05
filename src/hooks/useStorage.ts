import { useAppDispatch, useAppSelector } from '../providers/store/hooks';
import { setData } from '../providers/store/slices/user-slice';
import { addToFbArrayParam, getFbDoc, getFbDocRef, removeFromFbArrayParam } from '../services/firebase-db';
import { favoritesName, userCollectionName } from '../utils/constants';

export function useStorage() {
    const user = useAppSelector((store) => store.user.user);
    const dispatch = useAppDispatch();
    const userStorageRef = user ? getFbDocRef(userCollectionName, user.uid) : null;

    const getUserData = async () => {
        if (!userStorageRef) {
            return;
        }
        const snap = await getFbDoc(userStorageRef);
        if (snap.exists()) {
            dispatch(setData(snap.data()));
        }
    };

    const addToFavorites = (recipeId: number) => {
        if (!userStorageRef) {
            return;
        }
        addToFbArrayParam(userStorageRef, favoritesName, recipeId).then(() => getUserData());
    };

    const removeFromFavorites = (recipeId: number) => {
        if (!userStorageRef) {
            return;
        }
        removeFromFbArrayParam(userStorageRef, favoritesName, recipeId).then(() => getUserData());
    };

    return { addToFavorites, removeFromFavorites, getUserData };
}
