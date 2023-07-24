// creating the posts slice using the react toolkit
import { createSlice } from "@reduxjs/toolkit";
//create a posts slice using the createslice function
const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers: {
        //create a reducer for the get posts
        getPostsSuccess: (state, action) => {
            state.posts = action.payload;
        }
    }
});
//export the reducer actions
export const { getPostsSuccess } = postsSlice.actions;
//export the reducer
export default postsSlice.reducer;
