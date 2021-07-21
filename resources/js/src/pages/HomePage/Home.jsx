import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header/Header";
import HomeUserProfile from "./HomeUserProfile";
import HomeTrends from "./HomeTrends";
import HomeFollow from "./HomeFollow";
import NewPost from "./NewPost";
import PostList from "./PostList/PostList";
import ToggleTheme from "./ToggleTheme";

import axios from "axios";
import Config from "../../Config";

import { observer, inject } from "mobx-react";

let isAuth;

const authControl = async (token) => {
    const response = await axios
        .get(`${Config.BASE_URL}/api/v1/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => response)
        .catch(() => console.log("ERROR"));
    return response;
};

const isAuthenticated = async () => {
    const token = localStorage.getItem("auth_token");

    if (token == undefined) {
        return false;
    }

    const data = await authControl(token);
    return data.code === 200;
};

@inject("Store")
@observer
class Home extends Component {
    constructor(props) {
        super(props);

        isAuth = isAuthenticated();
    }

    componentDidMount() {
        this.props.Store.getUserInfo();
    }
    render() {
        return isAuth ? (
            <>
                <Header />
                <div className="container main-content">
                    <div className="row">
                        <div className="col-sm-3">
                            <HomeUserProfile />
                            <HomeTrends />
                        </div>
                        <div className="col-sm-6">
                            <NewPost />
                            <PostList />
                            {/* Posts here */}
                        </div>
                        <div className="col-sm-3">
                            <HomeFollow />
                            <ToggleTheme />
                        </div>
                    </div>
                </div>
            </>
        ) : (
            <Redirect to="login" />
        );
    }
}
export default Home;
