import React, { useState } from "react";

import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";

const Landing = () => {
    const [isActive, setActive] = useState("login");

    const changer = () => {
        if (isActive == "login") {
            setActive("register");
        } else {
            setActive("login");
        }
    };

    return (
        <>
            <nav className="navbar navbar-default navbar-fixed-top menu">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/landing">
                            <img
                                loading="eager"
                                src="images/logo_with_name.png"
                                width="168px"
                                height="30px"
                                alt="logo"
                            />
                        </Link>
                    </div>
                </div>
            </nav>
            <div id="lp-register">
                <div className="container wrapper">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="intro-texts">
                                <h1 className="text-white">
                                    Introduce with Traders
                                </h1>
                                <p>
                                    Macd Traders Platform is a social media
                                    platform that tries to gather all people who
                                    trade <br /> <br />
                                    Why are you waiting for? Join us!
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-1">
                            <div className="reg-form-container">
                                <div className="reg-options">
                                    <ul className="nav nav-tabs">
                                        <li
                                            className={
                                                isActive == "register"
                                                    ? "active"
                                                    : null
                                            }
                                        >
                                            <a
                                                href="#register"
                                                data-toggle="tab"
                                                onClick={changer}
                                            >
                                                Register
                                            </a>
                                        </li>
                                        <li
                                            className={
                                                isActive == "login"
                                                    ? "active"
                                                    : null
                                            }
                                        >
                                            <a
                                                href="#login"
                                                data-toggle="tab"
                                                onClick={changer}
                                            >
                                                Login
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content">
                                    <Login active={isActive} />
                                    <Register
                                        changer={changer}
                                        active={isActive}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-6">
                            <ul className="list-inline social-icons">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100069041405057">
                                        <i className="icon ion-social-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/macdfinance">
                                        <i className="icon ion-social-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
