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
                history.push("/landing");
            })
            .catch((err) => {
                localStorage.removeItem("auth_control_s2");
                history.push("/landing");
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
                        <Link className="navbar-brand" to="/">
                            <img
                                src="images/logo_with_name.png"
                                width="168px"
                                height="30px"
                                alt="logo"
                            />
                        </Link>
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
                                        <Link to="/me">My Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/friends">My friends</Link>
                                    </li>
                                    <li>
                                        <a>Messages(Coming Soon)</a>
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
                                        <a href="#">
                                            Account Settings(Coming Soon)
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a>
                                    <button
                                        className="btn btn-primary"
                                        onClick={signOut}
                                    >
                                        Sign Out
                                    </button>
                                </a>
                            </li>
                        </ul>

                        {/*
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
*/}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
