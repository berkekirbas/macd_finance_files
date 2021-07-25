import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./register.css"

import { BASE_URL } from "../../Config";

const Register = (props) => {
    const history = useHistory();

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
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
        if (state.password === state.password_confirmation) {
            // ! data
            const data = {
                name: state.name,
                email: state.email,
                password: state.password,
                password_confirmation: state.password_confirmation,
            };

            // ! register request
            axios
                .post(`${BASE_URL}/api/v1/auth/register`, data)
                .then(() => {
                    history.push("/login");
                })
                .catch((error) => error);

            //AuthService.register(data);
        } else {
            // TODO: Add error text to form for validation error.
            console.log("passwords not match");
        }
    };

    return (
        <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
            <header className="max-w-lg mx-auto">
                <a href="#">
                    <h1 className="text-4xl font-bold text-white text-center">
                        Sign up
                    </h1>
                </a>
            </header>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">
                        Welcome to Traders Platform
                    </h3>
                    <p className="text-gray-600 pt-2">
                        Create your a account. It`s free.
                    </p>
                </section>

                <section className="mt-10">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                required
                                value={state.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                htmlFor="Nickname"
                            >
                                Nickname
                            </label>
                            <input
                                type="text"
                                id="nickname"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                required
                                /*value={state.email}
                                onChange={handleChange}*/
                            />
                        </div>
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

                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                htmlFor="password"
                            >
                                Confirm your password
                            </label>
                            <input
                                type="password"
                                id="password_confirmation"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                required
                                value={state.password_confirmation}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </form>
                </section>
            </main>

            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p className="text-white">
                    Have you an account? Sign in{" "}
                    <Link to="/login" className="font-bold hover:underline">
                        Sign in
                    </Link>
                    .
                </p>
            </div>

            <footer className="max-w-lg mx-auto flex justify-center text-white">
                <a href="https://macdfinance.com" className="hover:underline">
                    <p className="hover:underline">{`Copyright © ${new Date().getFullYear()}`}</p>
                    <span className="mx-3">•</span>
                    <p>macdfinance.com</p>
                </a>
            </footer>
        </div>
    );
};

export default Register;
