import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userSlice from "./slice/userSlice";
import postSlice from "./slice/postSlice";

const rootReducer = combineReducers({
    user: userSlice,
    posts: postSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
