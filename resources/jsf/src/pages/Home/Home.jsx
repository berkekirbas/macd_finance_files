//! gerekli kütüphaneler
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

// ! gerekli componentler
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import PostCreateBox from "../../components/PostCreateBox/PostCreateBox";
import Post from "../../components/Post/Post";
import TopList from "../../components/TopList/TopList";
import Loader from "../../components/loader/Loader";

import { useDispatch, useSelector } from "react-redux";

import { userSelector, fetchUserInfo } from "../../store/slice/userSlice";
import { USER_TYPE } from "../../Config";

const Home = () => {
    const dispatch = useDispatch();
    const { user, userLoading, userHasErrors } = useSelector(userSelector);

    useEffect(() => {
        dispatch(fetchUserInfo());
    }, [dispatch]);

    const render = () => {
        if (userLoading) return <Loader />;
        if (userHasErrors) {
            localStorage.removeItem("auth_control_s2");
            return <Redirect to="/landing" />;
        }

        return (
            <>
                <Header />
                <div id="page-contents">
                    <div className="container">
                        <div className="row">
                            <Profile />
                            <div className="col-md-7">
                                {user.isTrader === USER_TYPE.TRADER ? (
                                    <PostCreateBox />
                                ) : null}
                                <Post />
                            </div>
                            <TopList />
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return <>{render()}</>;
};

export default Home;
