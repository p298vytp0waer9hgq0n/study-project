import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {},
    middleware: (getDefault) => getDefault(),
});

export type AppDispatch = typeof store.dispatch;
