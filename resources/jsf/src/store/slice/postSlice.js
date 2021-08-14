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

        addLike: (state, { payload }) => {
            state.posts.map((post) => {
                if (post.post_id == payload) {
                    post.like++;
                }
            });
        },

        deleteLike: (state, { payload }) => {
            state.posts.map((post) => {
                if (post.post_id == payload) {
                    post.like--;
                }
            });
        },
    },
});

export const { getPosts, getPostsSuccess, getPostsFail, addLike, deleteLike } =
    userSlice.actions;

export default userSlice.reducer;

export function likePost(post_id) {
    return async (dispatch) => {
        /*
         * First, We will check user is likes this posts
         */
        const data = {
            post_id: post_id,
        };

        axios
            .post(`${BASE_URL}/api/v1/auth/post/like`, data, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.message == "Liked") {
                    dispatch(addLike(post_id));
                } else {
                    dispatch(deleteLike(post_id));
                }
            })
            .catch((err) => console.log(err));
    };
}

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
