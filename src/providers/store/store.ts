import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { dummyjsonApi } from './services/dummyjs-api';
import { userReducer } from './slices/user-slice';

const rootReducer = combineReducers({
    user: userReducer,
    [dummyjsonApi.reducerPath]: dummyjsonApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefault) =>
        getDefault({
            serializableCheck: false,
        }).concat([dummyjsonApi.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
