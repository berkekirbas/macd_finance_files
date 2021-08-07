import React, { useState } from "react";
import axios from "axios";

import { BASE_URL } from "../../Config";

import LoaderForm from "../LoaderForm/LoaderForm";

function Register(props) {
    const [userGender, setGender] = useState("male");
    const [registerState, setRegisterState] = useState({
        name: "",
        email: "",
        nickname: "",
        password: "",
        password_confirmation: "",
    });
    const [loading, setLoading] = useState(false);

    //! Gender Changer Function
    const handleOptionChange = (changeEvent) => {
        setGender(changeEvent.target.value);
    };

    //! registerState handler
    const handleChange = (e) => {
        const { id, value } = e.target;
        setRegisterState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    //! Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (registerState.password == registerState.password_confirmation) {
            const data = {
                name: registerState.name,
                nickname: registerState.nickname,
                email: registerState.email,
                password: registerState.password,
                password_confirmation: registerState.password_confirmation,
                gender: userGender,
            };

            axios
                .post(`${BASE_URL}/api/v1/auth/register`, data, {
                    withCredentials: true,
                })
                .then((response) => {
                    setRegisterState({});
                    setLoading(false);
                    props.changer();
                })
                .catch((err) => console.error(err));
        } else {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <LoaderForm />
            ) : (
                <div
                    className={
                        props.active == "register"
                            ? "tab-pane active"
                            : "tab-pane"
                    }
                    id="register"
                >
                    <h3>Register Now !!!</h3>
                    <p className="text-muted">
                        Be cool and join today. Meet millions
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        name="registration_form"
                        id="registration_form"
                        className="form-inline"
                    >
                        <div className="row">
                            <div className="form-group col-xs-6">
                                <label htmlFor="firstname" className="sr-only">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    className="form-control input-group-lg"
                                    type="text"
                                    name="name"
                                    title="Enter name"
                                    placeholder="Name"
                                    value={registerState.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-xs-6">
                                <label htmlFor="lastname" className="sr-only">
                                    Nickname
                                </label>
                                <input
                                    id="nickname"
                                    className="form-control input-group-lg"
                                    type="text"
                                    name="nickname"
                                    title="Enter Nickname"
                                    placeholder="Nickname"
                                    value={registerState.nickname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-xs-12">
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="form-control input-group-lg"
                                    type="text"
                                    name="Email"
                                    title="Enter Email"
                                    placeholder="Your Email"
                                    value={registerState.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-xs-12">
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    className="form-control input-group-lg"
                                    type="password"
                                    name="password"
                                    title="Enter password"
                                    placeholder="Password"
                                    value={registerState.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-xs-12">
                                <label htmlFor="password" className="sr-only">
                                    Password Confirmation
                                </label>
                                <input
                                    id="password_confirmation"
                                    className="form-control input-group-lg"
                                    type="password"
                                    name="password_confirmation"
                                    title="Enter Password again"
                                    placeholder="Confirm Your Password"
                                    value={registerState.password_confirmation}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group gender">
                            <label className="radio-inline">
                                <input
                                    type="radio"
                                    name="male"
                                    value="male"
                                    checked={userGender === "male"}
                                    onChange={handleOptionChange}
                                    className="form-check-input"
                                />
                                Male
                            </label>
                            <label className="radio-inline">
                                <input
                                    type="radio"
                                    name="female"
                                    value="female"
                                    className="form-check-input"
                                    checked={userGender === "female"}
                                    onChange={handleOptionChange}
                                />
                                Female
                            </label>
                        </div>

                        <p>
                            <a href="#">Already have an account?</a>
                        </p>
                        <button type="submit" className="btn btn-primary">
                            Register Now
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}

export default Register;
