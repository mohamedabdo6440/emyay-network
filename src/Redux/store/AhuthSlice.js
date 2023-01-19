import { createSlice } from '@reduxjs/toolkit'
//handle userAccount Name
const userAuth = localStorage.getItem("email")

const AuthSlice = createSlice({

    name: "Auth",
    initialState: { isLoggedIn: false, name: userAuth },

    reducers: {
        logInOut: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    }
})

export const { logInOut } = AuthSlice.actions;

export default AuthSlice.reducer;