import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userListenerMiddleware } from './middleware';
import { dummyjsonApi } from './services/dummyjs-api';
import { historyApi } from './services/history-api';
import { userReducer } from './slices/user-slice';

const rootReducer = combineReducers({
    user: userReducer,
    [dummyjsonApi.reducerPath]: dummyjsonApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefault) =>
        getDefault({
            serializableCheck: false,
        })
            .concat([dummyjsonApi.middleware, historyApi.middleware])
            .prepend(userListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
