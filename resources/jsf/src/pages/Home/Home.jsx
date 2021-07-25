import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import PostCreateBox from "../../components/PostCreateBox/PostCreateBox";
import Post from "../../components/Post/Post";
import TopList from "../../components/TopList/TopList";

import Loader from "../../components/loader/Loader";

import { isAuthenticated } from "../../service/Auth.service";

import { BASE_URL } from "../../Config";

const Home = () => {
    const [isAuth, setAuth] = useState(null);

    const [user, setUser] = useState({});

    useEffect(() => {
        async function control() {
            setAuth(await isAuthenticated());
        }
        control();
    });

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        axios
            .get(`${BASE_URL}/api/v1/auth/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => setUser(res.data.message.user));
    }, []);

    return isAuth == null ? (
        <Loader />
    ) : isAuth ? (
        <>
            <Header />
            <div id="page-contents">
                <div className="container">
                    <div className="row">
                        <Profile user={user} />
                        <div className="col-md-7">
                            {user.isTrader == 1 ? (
                                <PostCreateBox avatar={user.avatar} />
                            ) : (
                                <></>
                            )}
                            <Post />
                        </div>
                        <TopList />
                    </div>
                </div>
            </div>
        </>
    ) : (
        <Redirect to="/login" />
    );
};

export default Home;
