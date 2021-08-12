//! slice oluşturma metodumuz
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Config";
import { getPostsFail, getPostsSuccess } from "./postSlice";

// başlangıç state imiz
const initialState = {
    userLoading: false,
    userHasErrors: false,
    user: {},

    userPosts: [],
    postsLoading: false,
    postsHasErrors: false,

    userProfile: {},
    userProfileLoading: false,
    userProfileHasErrors: false,
};

export const userSelector = (state) => state.user; // güncel değerini almak için

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser: (state) => {
            state.userLoading = true;
        },
        getUserSuccess: (state, { payload }) => {
            state.user = payload;
            state.userLoading = false;
            state.userHasErrors = false;
        },
        getUserFail: (state) => {
            state.userHasErrors = true;
            state.userLoading = false;
        },

        getUserPosts: (state) => {
            state.postsLoading = true;
        },
        getUserPostsSuccess: (state, { payload }) => {
            state.userPosts = payload;
            state.postsLoading = false;
            state.postsHasErrors = false;
        },
        getUserPostsFail: (state) => {
            state.postsHasErrors = true;
            state.postsLoading = false;
        },

        getProfileUserInfo: (state) => {
            state.userProfileLoading = true;
        },

        getUserProfileSuccess: (state, { payload }) => {
            state.userProfile = payload;
            state.userProfileLoading = false;
            state.userProfileHasErrors = false;
        },

        getUserProfileFail: (state) => {
            state.userProfileHasErrors = true;
            state.userProfileLoading = false;
        },
    },
});

export const {
    getUser,
    getUserSuccess,
    getUserFail,

    getUserPosts,
    getUserPostsSuccess,
    getUserPostsFail,

    getProfileUserInfo,
    getUserProfileSuccess,
    getUserProfileFail,
} = userSlice.actions;

export default userSlice.reducer;

export function fetchProfileUserInfo(nickname) {
    return async (dispatch) => {
        dispatch(getProfileUserInfo());

        await axios
            .get(`${BASE_URL}/api/v1/auth/getUserProfileInfo/${nickname}`, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.nickname === undefined) {
                    return dispatch(getUserProfileFail());
                }
                dispatch(getUserProfileSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getUserProfileFail());
            });
    };
}

export function fetchUserInfo() {
    return async (dispatch) => {
        dispatch(getUser());

        await axios
            .get(`${BASE_URL}/api/v1/auth/me`, {
                withCredentials: true,
            })
            .then((response) => {
                dispatch(getUserSuccess(response.data.message.user));
            })
            .catch(() => {
                dispatch(getUserFail());
            });
    };
}

export function fetchUserPosts(id) {
    return async (dispatch) => {
        dispatch(getUserPosts());
        await axios
            .get(`${BASE_URL}/api/v1/auth/getUserPosts/${id}`, {
                withCredentials: true,
            })
            .then((response) => {
                dispatch(getUserPostsSuccess(response.data));
            })
            .catch(() => {
                dispatch(getUserPostsFail());
            });
    };
}
