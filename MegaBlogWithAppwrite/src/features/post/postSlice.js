import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

/*
* This represents the initial state for the post slice.
* Here we have an empty array to store the posts.
*/
const initialState = {
    posts: [],
    userPosts: []
}

const postSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        /*
        * This reducer function is used to store the list of posts in the state.
        */
        postList: (state, action) => {
            state.posts = action.payload;
        },
        /*
        * This reducer function is used to store the list of user posts in the state.
        */
        userPosts: (state, action) => {
            state.userPosts = action.payload;
        },
        /*
        * This reducer function is used to add a new post to the state.
        */
        addPost: (state, action) => {
            state.posts.push(action.payload);
            state.userPosts.push(action.payload);
        },
        /*
        * This reducer function is used to remove a post from the state.
        */
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.$id !== action.payload);
            state.userPosts = state.userPosts.filter(post => post.$id !== action.payload);
            console.log(state.posts, state.userPosts);
        },
        /*
        * This reducer function is used to update a post in the state.
        */
        updatePost: (state, action) => {
            state.posts = state.posts.map(post => post.$id === action.payload.lastId ? action.payload.updatedPost : post);
            state.userPosts = state.userPosts.map(post => post.$id === action.payload.lastId ? action.payload.updatedPost : post);
        }
    }
});

export const { postList, userPosts, addPost, removePost, updatePost } = postSlice.actions;

export default postSlice.reducer;