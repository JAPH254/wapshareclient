//react toolkit store
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postsReducer from "./postsSlice";

//configure the store with the reducers
const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
    },
});

export default store;