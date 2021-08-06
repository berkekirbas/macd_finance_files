//! slice oluşturma metodumuz
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Config";

// başlangıç state imiz
const initialState = {
    loading: false,
    hasErrors: false,
    posts: [],
};

export const postSelector = (state) => state.posts; // güncel değerini almak için

const userSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, { payload }) => {
            state.posts.push({ payload });
        },
        getPosts: (state) => {
            state.loading = true;
        },
        getPostsSuccess: (state, { payload }) => {
            state.posts = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getPostsFail: (state) => {
            state.hasErrors = true;
            state.loading = false;
        },
    },
});

export const { getPosts, getPostsSuccess, getPostsFail, addPost } =
    userSlice.actions;

export default userSlice.reducer;

export function fetchPosts() {
    return async (dispatch) => {
        dispatch(getPosts());

        await axios
            .get(`${BASE_URL}/api/v1/public/getAllPost`)
            .then((response) => {
                dispatch(getPostsSuccess(response.data));
            })
            .catch(() => {
                dispatch(getPostsFail());
            });
    };
}
