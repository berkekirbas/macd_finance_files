import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./login.css";

import { BASE_URL } from "../../Config";
import { randomString } from "../../utils/randomStringGenerator";

const Login = (props) => {
    const history = useHistory();
    const [state, setState] = useState({
        email: "",
        password: "",
        errors: {},
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

        // ! data
        const data = {
            email: state.email,
            password: state.password,
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
                    history.push("/");
                }
            })
            .catch((error) => error);
    };

    return (
        <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
            <header className="max-w-lg mx-auto">
                <a href="#">
                    <h1 className="text-4xl font-bold text-white text-center">
                        Login
                    </h1>
                </a>
            </header>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">
                        Welcome to Traders Platform
                    </h3>
                    <p className="text-gray-600 pt-2">
                        Sign in to your account.
                    </p>
                </section>

                <section className="mt-10">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                required
                                value={state.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                required
                                value={state.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <button
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </form>
                </section>
            </main>

            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p className="text-white">
                    Don't have an account?{" "}
                    <Link to="/register" className="font-bold hover:underline">
                        Sign up
                    </Link>
                    .
                </p>
            </div>

            <footer className="max-w-lg mx-auto flex justify-center text-white">
                <a href="https://macdfinance.com" className="hover:underline">
                    <p className="hover:underline">{`Copyright © ${new Date().getFullYear()}`}</p>
                    <p>macdfinance.com</p>
                </a>
            </footer>
        </div>
    );
};

export default Login;
