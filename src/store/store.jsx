//react toolkit store
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

//configure the store with the user reducer
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;