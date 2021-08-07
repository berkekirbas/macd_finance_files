import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { randomString } from "../../utils/randomStringGenerator";

import axios from "axios";
import { BASE_URL } from "../../Config";

import LoaderForm from "../LoaderForm/LoaderForm";

function Login(props) {
    const history = useHistory();
    const [loginState, setLoginState] = useState({
        login_email: "",
        login_password: "",
    });
    const [loading, setLoading] = useState(false);

    const handleLoginChange = (e) => {
        const { id, value } = e.target;
        setLoginState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // ! data
        const data = {
            email: loginState.login_email,
            password: loginState.login_password,
        };

        // ! login request

        axios
            .post(`${BASE_URL}/api/v1/auth/login`, data, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.token == undefined) {
                    console.log(response.data.message);
                } else {
                    localStorage.setItem("auth_control_s2", randomString(50));
                    setLoading(false);
                    history.push("/");
                }
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };
    return (
        <>
            {loading ? (
                <LoaderForm />
            ) : (
                <div
                    className={
                        props.active == "login" ? "tab-pane active" : "tab-pane"
                    }
                    id="login"
                >
                    <h3>Login</h3>
                    <p className="text-muted">Log into your account</p>

                    <form
                        onSubmit={handleLoginSubmit}
                        name="Login_form"
                        id="Login_form"
                    >
                        <div className="row">
                            <div className="form-group col-xs-12">
                                <label htmlFor="my-email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="login_email"
                                    className="form-control input-group-lg"
                                    type="text"
                                    name="Email"
                                    title="Enter Email"
                                    placeholder="Your Email"
                                    value={loginState.login_email}
                                    onChange={handleLoginChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-xs-12">
                                <label
                                    htmlFor="my-password"
                                    className="sr-only"
                                >
                                    Password
                                </label>
                                <input
                                    id="login_password"
                                    className="form-control input-group-lg"
                                    type="password"
                                    name="password"
                                    title="Enter password"
                                    placeholder="Password"
                                    value={loginState.login_password}
                                    onChange={handleLoginChange}
                                />
                            </div>
                        </div>

                        <p>
                            <a href="#">Forgot Password?</a>
                        </p>
                        <button className="btn btn-primary">Login Now</button>
                    </form>
                </div>
            )}
        </>
    );
}

export default Login;
