//! gerekli kütüphaneler
import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

// ! gerekli componentler
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import PostCreateBox from "../../components/PostCreateBox/PostCreateBox";
import Post from "../../components/Post/Post";
import TopList from "../../components/TopList/TopList";
import Loader from "../../components/loader/Loader";

//! gerekli service fonksiyonu
import { isAuthenticatedAndGetUserInfo } from "../../service/Auth.service";

const Home = () => {
    const [isAuth, setAuth] = useState(null);

    const [user, setUser] = useState({});

    useEffect(() => {
        async function authControlAndGetUserInfo() {
            let data = await isAuthenticatedAndGetUserInfo();
            if (!data.code) {
                localStorage.removeItem("auth_token_s2");
                setAuth(false);
                setUser(null);
                return;
            } else if (data.code === 200) {
                setUser(data.message.user);
                setAuth(true);
            } else {
                localStorage.removeItem("auth_token_s2");
                setUser(null);
                setAuth(false);
                return;
            }
        }
        authControlAndGetUserInfo();
        return () => {
            setUser(null);
            setAuth(false);
        };
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
                            ) : null}
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
