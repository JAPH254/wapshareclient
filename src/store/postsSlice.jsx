// creating the posts slice using the react toolkit
import { createSlice, } from "@reduxjs/toolkit";
//create a posts slice using the createslice function
const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        comments:[],
        Error: null,
    },
    reducers: {
        //create a reducer for the get posts
        getPostsSuccess: (state, action) => {
            state.posts = action.payload;
        },
        getComments:(state, action)=>{
            state.comments = action.payload
        }
    }
});
//export the reducer actions
export const { getPostsSuccess, getComments } = postsSlice.actions;
//export the reducer
export default postsSlice.reducer;
