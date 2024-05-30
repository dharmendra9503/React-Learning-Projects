import { createSlice } from "@reduxjs/toolkit";

/**
 * Represents the initial state for the authentication slice.
 *
 * @typedef {Object} AuthInitialState
 * @property {boolean} status - The authentication status.
 * @property {Object|null} userData - The user data object.
 */
const initialState = {
    status: false,
    userData: null
}

/**
 * Redux slice for managing authentication state.
 *
 * @typedef {Object} AuthSlice
 * @property {string} name - The name of the slice.
 * @property {Object} initialState - The initial state of the slice.
 * @property {Object} reducers - The reducers for handling login and logout actions.
 * @property {Function} reducers.login - Reducer function for handling login action.
 * @property {Function} reducers.logout - Reducer function for handling logout action.
 */
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;