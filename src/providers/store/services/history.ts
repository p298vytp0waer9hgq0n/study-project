import { addToFbArrayParam, getFbDoc, getFbDocRef } from '../../../services/firebase-db';
import { historyName, userCollectionName } from '../../../utils/constants';
import type { RootState } from '../store';
import type { HistoryRecord } from '../types/types';
import { historyApi } from './history-api';

export const historyEp = historyApi.injectEndpoints({
    endpoints: (builder) => ({
        retrieveHistory: builder.query<HistoryRecord[], void>({
            async queryFn(_, api) {
                const { user: userState } = api.getState() as RootState;
                const user = userState.user;
                if (!user) {
                    return { data: [] };
                }
                const userStorageRef = getFbDocRef(userCollectionName, user.uid);
                const doc = await getFbDoc(userStorageRef);
                if (doc.exists()) {
                    return { data: doc.data().history };
                } else {
                    return { data: [] };
                }
            },
            providesTags: ['history'],
        }),
        addToHistory: builder.mutation<HistoryRecord | null, HistoryRecord>({
            queryFn(record, api) {
                const { user: userState } = api.getState() as RootState;
                const user = userState.user;
                if (!user) {
                    return { data: null };
                }
                const userStorageRef = getFbDocRef(userCollectionName, user.uid);
                addToFbArrayParam(userStorageRef, historyName, record);
                return { data: record };
            },
            invalidatesTags: ['history'],
        }),
    }),
});

export const { useAddToHistoryMutation, useRetrieveHistoryQuery } = historyEp;
