import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

import { fbSignIn, fbSignOut, fbSignUp } from '../../../services/firebase-auth';

export const signInThunk = createAsyncThunk('user/signIn', fbSignIn);
export const signOutThunk = createAsyncThunk('user/signOut', fbSignOut);
export const signUpThunk = createAsyncThunk('user/signUp', fbSignUp);

type UserState = {
    user: User | null;
    isLoading: boolean;
    hasError: boolean;
};

const initialState: UserState = {
    user: null,
    isLoading: false,
    hasError: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setHasError: (state, action) => {
            state.hasError = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signInThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
        });
        builder.addCase(signUpThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
        });
        builder.addCase(signOutThunk.fulfilled, () => {
            return initialState;
        });
    },
});

export const userReducer = userSlice.reducer;

export const { setUser, setIsLoading, setHasError } = userSlice.actions;
