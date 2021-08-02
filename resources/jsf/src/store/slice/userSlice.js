//! slice oluşturma metodumuz
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../Config";

// başlangıç state imiz
const initialState = {
    loading: false,
    hasErrors: false,
    user: {},
};

export const userSelector = (state) => state.user; // güncel değerini almak için

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser: (state) => {
            state.loading = true;
        },
        getUserSuccess: (state, { payload }) => {
            state.user = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getUserFail: (state) => {
            state.hasErrors = true;
            state.loading = false;
        },
    },
});

export const { getUser, getUserSuccess, getUserFail } = userSlice.actions;

export default userSlice.reducer;

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
