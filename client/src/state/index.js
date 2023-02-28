import { createSlice } from "@reduxjs/toolkit";

// State that will be stored in our global state/this data will be accessible throughout our whole application
const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    // Represents the auth workflow
    name: "auth",
    // Initial state of the global state pretty much calling itself
    initialState,
    // Functions that involve modifying the global state
    reducers: {
    setMode: (state) => {
        state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
    },
    setLogout: (state) => {
        state.user = null;
        state.token = null;
    },
    setFriends: (state, action) => {
        if (state.user) {
        state.user.friends = action.payload.friends;
        } else {
        console.error("user friends non-existent :(");
        }
    },
    setPosts: (state, action) => {
        state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
        const updatedPosts = state.posts.map((post) => {
        // If post id equals the current post id thats being sent into this function, return the post that we changed
        if (post._id === action.payload.post._id) return action.payload.post;
        // Else return what we currently have
        return post;
        });
        state.posts = updatedPosts;
    },
    },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;