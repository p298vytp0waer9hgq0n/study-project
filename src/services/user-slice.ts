import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

import { fbSignIn, fbSignOut, fbSignUp } from '../api/firebase-auth';

export const signIn = createAsyncThunk('user/signIn', fbSignIn);
export const signOut = createAsyncThunk('user/signOut', fbSignOut);
export const signUp = createAsyncThunk('user/signUp', fbSignUp);

type UserState = {
    user: User | null;
    isLoading: boolean;
    hasError: boolean;
};

const initialState: UserState = {
    user: null,
    isLoading: true,
    hasError: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogoff: () => {
            return initialState;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setHasError: (state, action) => {
            state.hasError = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
        });
    },
});

export const userReducer = userSlice.reducer;

export const { setLogoff, setIsLoading, setHasError } = userSlice.actions;
