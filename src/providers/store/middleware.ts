import { createListenerMiddleware } from '@reduxjs/toolkit';

import { getFbDoc, getFbDocRef } from '../../services/firebase-db';
import { USER_COLLECTION_NAME } from '../../utils/constants';
import { isUser } from '../../utils/is-user';
import { setData, setUser } from './slices/user-slice';
import { AppDispatch, RootState } from './store';

export const userListenerMiddleware = createListenerMiddleware();
const startAppListening = userListenerMiddleware.startListening.withTypes<RootState, AppDispatch>();
startAppListening({
    actionCreator: setUser,
    effect: async (action, listenerApi) => {
        if (isUser(action.payload)) {
            const userStorageRef = getFbDocRef(USER_COLLECTION_NAME, action.payload.uid);
            getFbDoc(userStorageRef).then((snap) => {
                if (snap.exists()) {
                    listenerApi.dispatch(setData(snap.data()));
                }
            });
        }
    },
});
