import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../Config";

const Header = () => {
    const history = useHistory();

    const signOut = () => {
        axios
            .post(`${BASE_URL}/api/v1/auth/logout`, null, {
                withCredentials: true,
            })
            .then(() => {
                localStorage.removeItem("auth_control_s2");
                history.push("/login");
            })
            .catch((err) => {
                localStorage.removeItem("auth_control_s2");
                history.push("/login");
            });
    };

    return (
        <header id="header">
            <nav className="navbar navbar-default navbar-fixed-top menu">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index-register.html">
                            <img
                                src="images/logo_with_name.png"
                                width="168px"
                                height="30px"
                                alt="logo"
                            />
                        </a>
                    </div>

                    <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav navbar-right main-menu">
                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Navigation{" "}
                                </a>
                                <ul className="dropdown-menu newsfeed-home">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <a href="newsfeed-friends.html">
                                            My friends
                                        </a>
                                    </li>
                                    <li>
                                        <a href="newsfeed-videos.html">
                                            Messages
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Settings{" "}
                                </a>
                                <ul className="dropdown-menu login">
                                    <li>
                                        <a href="edit-profile-settings.html">
                                            Account Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="edit-profile-password.html">
                                            Change Password
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a style={{ color: "#27AAE1" }}>
                                    <button onClick={signOut}>Sign Out</button>
                                </a>
                            </li>
                        </ul>

                        <form className="navbar-form navbar-right hidden-sm">
                            <div className="form-group">
                                <i className="icon ion-android-search"></i>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search friends, photos, videos"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
