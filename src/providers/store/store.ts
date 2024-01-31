import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from './slices/user-slice';

const rootReducer = combineReducers({
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefault) =>
        getDefault({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
