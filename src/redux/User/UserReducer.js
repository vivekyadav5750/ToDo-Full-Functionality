import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {name: "John Doe"},
    isFetching: false,
    error: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // login
        loginStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        // logout
        logout: (state) => {
            state.user = null;
        },
    },
});

export const userReducer = userSlice.reducer;
// export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export const userSelection = (state) => state.user;