//! slice oluşturma metodumuz
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Config";

// başlangıç state imiz
const initialState = {
    userLoading: false,
    userHasErrors: false,
    user: {},
    followers: null,

    userPosts: [],
    postsLoading: false,
    postsHasErrors: false,

    userProfile: {},
    userProfileLoading: false,
    userProfileHasErrors: false,
    followersCount: null,
    isFollowing: null,

    allUsers: [],
    allUsersLoading: false,
    allUsersHasErrors: false,
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

        getUserFollowers: (state, { payload }) => {
            state.followers = payload;
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

        getFollowersCount: (state, { payload }) => {
            state.followersCount = payload;
        },
        isFollowing: (state, { payload }) => {
            state.isFollowing = payload;
        },

        addNewFollower: (state) => {
            state.followersCount++;
            state.isFollowing = true;
        },
        removeAFollower: (state) => {
            state.followersCount--;
            state.isFollowing = false;
        },

        getAllUsers: (state) => {
            state.allUsersLoading = true;
        },
        getAllUsersSuccess: (state, { payload }) => {
            state.allUsers = payload;
            state.allUsersLoading = false;
            state.allUsersHasErrors = false;
        },
        getAllUsersFail: (state) => {
            state.allUsersHasErrors = true;
            state.allUsersLoading = false;
        },
        addLike: (state, { payload }) => {
            state.userPosts.map((post) => {
                if (post.post_id == payload) {
                    post.like++;
                }
            });
        },

        deleteLike: (state, { payload }) => {
            state.userPosts.map((post) => {
                if (post.post_id == payload) {
                    post.like--;
                }
            });
        },
    },
});

export const {
    getUser,
    getUserSuccess,
    getUserFail,

    getUserFollowers,

    getUserPosts,
    getUserPostsSuccess,
    getUserPostsFail,

    getProfileUserInfo,
    getUserProfileSuccess,
    getUserProfileFail,

    getFollowersCount,
    isFollowing,

    addNewFollower,
    removeAFollower,

    getAllUsers,
    getAllUsersSuccess,
    getAllUsersFail,

    addLike,
    deleteLike,
} = userSlice.actions;

export default userSlice.reducer;

export function likeUserPost(post_id) {
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

export function addFollower() {
    return async (dispatch) => {
        dispatch(addNewFollower());
    };
}

export function removeFollower() {
    return async (dispatch) => {
        dispatch(removeAFollower());
    };
}

export function fetchAllUsers() {
    return async (dispatch) => {
        dispatch(getAllUsers());

        await axios
            .get(`${BASE_URL}/api/v1/auth/getAllUsers`, {
                withCredentials: true,
            })
            .then((response) => {
                dispatch(getAllUsersSuccess(response.data));
            })
            .catch((error) => dispatch(getAllUsersFail()));
    };
}

export function fetchProfileUserInfo(nickname) {
    return async (dispatch) => {
        dispatch(getProfileUserInfo());

        await axios
            .get(`${BASE_URL}/api/v1/auth/getUserProfileInfo/${nickname}`, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.message.nickname === undefined) {
                    return dispatch(getUserProfileFail());
                }
                dispatch(getUserProfileSuccess(response.data.message));
                dispatch(getFollowersCount(response.data.followersCount));
                dispatch(isFollowing(response.data.isFollowing));
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
                dispatch(
                    getUserFollowers(response.data.message.userFollowersCount)
                );
            })
            .catch(() => {
                dispatch(getUserFail());
            });
    };
}

export function fetchUserInfoForTradersApplication() {
    return async (dispatch) => {
        dispatch(getUser());

        await axios
            .get(`${BASE_URL}/api/v1/auth/fetchUserInfoForTradersApplication`, {
                withCredentials: true,
            })
            .then((response) => {
                dispatch(getUserSuccess(response.data.message.user));
                dispatch(
                    getUserFollowers(response.data.message.userFollowersCount)
                );
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
