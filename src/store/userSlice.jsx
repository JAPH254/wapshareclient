//creating the userslice using the react toolkit
import { createSlice } from "@reduxjs/toolkit";
//create a user slice using the createslice function
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        //create a reducer for the login user
        loginSuccess: (state, action) => {
            state.user = action.payload;
        },
        //create a reducer for the logout user
        logoutSuccess: (state) => {
            state.user = null;
        },
        registerSuccess: (state,action)=>{
            state.user=action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    }
});
//export the reducer actions
export const { loginSuccess, logoutSuccess,registerSuccess } = userSlice.actions;
//export the reducer
export default userSlice.reducer;
