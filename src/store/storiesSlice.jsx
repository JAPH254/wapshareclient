// creating the posts slice using the react toolkit
import { createSlice, } from "@reduxjs/toolkit";
//create stories slice using the createslice function
const StorySlice = createSlice({
    name: "stories",
    initialState: {
        stories: [],
        Error: null,
    },
    reducers: {
        //create a reducer for the get stories
        getStories: (state, action) => {
            state.stories = action.payload;
    }
}
});
//export the reducer actions
export const { getStories } = StorySlice.actions;
//export the reducer
export default StorySlice.reducer;
