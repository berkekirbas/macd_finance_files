//! gerekli kütüphaneler
import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

// ! gerekli componentler
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";

import Loader from "../../components/loader/Loader";

import { useDispatch, useSelector } from "react-redux";

import {
    userSelector,
    fetchUserInfoForTradersApplication,
} from "../../store/slice/userSlice";
import { BASE_URL, USER_TYPE } from "../../Config";
import axios from "axios";

const Home = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const { user, userLoading, userHasErrors } = useSelector(userSelector);
    const [state, setState] = useState({
        telegram_link: "",
        instagram_link: "",
        twitter_link: "",
        introduce_yourself: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: user.id,
            email: user.email,
            telegram_link: state.telegram_link,
            instagram_link: state.instagram_link,
            twitter_link: state.twitter_link,
            introduce_yourself: state.introduce_yourself,
        };

        axios
            .post(`${BASE_URL}/api/v1/auth/traders_application`, data, {
                withCredentials: true,
            })
            .then((response) => {
                return history.push("/");
            })
            .catch((error) => {
                return history.push("/");
            });
    };

    useEffect(() => {
        dispatch(fetchUserInfoForTradersApplication());
    }, [dispatch]);

    const render = () => {
        if (userLoading) return <Loader />;
        if (userHasErrors) {
            localStorage.removeItem("auth_control_s2");
            return <Redirect to="/landing" />;
        }

        if (user.isTrader) {
            return <Redirect to="/" />;
        }
        if (user.isApplicated) {
            return <Redirect to="/" />;
        }

        return (
            <>
                <Header />
                <div id="page-contents">
                    <div className="container">
                        <div className="row">
                            <Profile />
                            <div className="col-md-7">
                                <h3>Traders Application</h3>
                                <p className="text-muted">
                                    If you are a trader and If you are
                                    confident, Join our Trader Community
                                </p>

                                <form
                                    onSubmit={handleSubmit}
                                    name="traders_form"
                                    id="traders_form"
                                >
                                    <div className="row">
                                        <span>
                                            Your User ID (Auto Completed)
                                        </span>

                                        <div className="form-group col-xs-12">
                                            <label
                                                htmlFor="user_id"
                                                className="sr-only"
                                            >
                                                Your User ID (Auto Completed)
                                            </label>
                                            <input
                                                id="user_id"
                                                className="form-control input-group-lg"
                                                type="text"
                                                name="user_id"
                                                title="USER ID"
                                                placeholder="Your User ID"
                                                disabled
                                                value={user.id}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <span>Your Email (Auto Completed)</span>

                                        <div className="form-group col-xs-12">
                                            <label
                                                htmlFor="email"
                                                className="sr-only"
                                            >
                                                Your Email (Auto Completed)
                                            </label>
                                            <input
                                                id="email"
                                                className="form-control input-group-lg"
                                                type="email"
                                                name="email"
                                                title="Email"
                                                placeholder="Your Email"
                                                disabled
                                                value={user.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <span>Telegram Link(Optional)</span>
                                        <div className="form-group col-xs-12">
                                            <label
                                                htmlFor="telegram_link"
                                                className="sr-only"
                                            >
                                                Social Media Links
                                            </label>
                                            <input
                                                id="telegram_link"
                                                className="form-control input-group-lg"
                                                type="text"
                                                name="telegram"
                                                title="Enter Telegram Link"
                                                placeholder="Enter Telegram Link"
                                                value={state.telegram_link}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <span>
                                            Instagram Profile Link (Optional)
                                        </span>
                                        <div className="form-group col-xs-12">
                                            <label
                                                htmlFor="instagram_link"
                                                className="sr-only"
                                            >
                                                Social Media Links
                                            </label>
                                            <input
                                                id="instagram_link"
                                                className="form-control input-group-lg"
                                                type="text"
                                                name="instagram"
                                                title="Enter Instagram Profile Link"
                                                placeholder="Enter Instagram Profile Link"
                                                value={state.instagram_link}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <span>
                                            Twitter Profile Link (Optional)
                                        </span>
                                        <div className="form-group col-xs-12">
                                            <label
                                                htmlFor="twitter_link"
                                                className="sr-only"
                                            >
                                                Social Media Links
                                            </label>
                                            <input
                                                id="twitter_link"
                                                className="form-control input-group-lg"
                                                type="text"
                                                name="twitter"
                                                title="Enter Twitter Profile Link"
                                                placeholder="Enter Twitter Profile Link"
                                                value={state.twitter_link}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <span>Introduce Yourself</span>
                                        <div className="form-group col-xs-12">
                                            <label
                                                htmlFor="introduce"
                                                className="sr-only"
                                            >
                                                Introduce Yourself
                                            </label>
                                            <textarea
                                                style={{ resize: "none" }}
                                                name="texts"
                                                id="introduce_yourself"
                                                cols="60"
                                                rows="5"
                                                className="form-control"
                                                placeholder="Introduce Yourself"
                                                value={state.introduce_yourself}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Application!
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return <>{render()}</>;
};

export default Home;
