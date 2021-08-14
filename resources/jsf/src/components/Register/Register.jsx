import React, { useState } from "react";
import axios from "axios";

import { BASE_URL } from "../../Config";

import LoaderForm from "../LoaderForm/LoaderForm";

import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Required Field")
        .min(3, "Minimum 3 Character")
        .max(25, "Maximum 25 Character"),
    nickname: Yup.string()
        .required("Required Field")
        .min(3, "Minimum 3 Character")
        .max(25, "Maximum 25 Character"),
    email: Yup.string()
        .email("Invalid Mail Adress")
        .required("Required Field")
        .min(3, "Minimum 3 Character")
        .max(191, "Maximum 191 Character"),
    password: Yup.string()
        .required("Required Filed")
        .min(3, "Minimum 3 Character")
        .max(191, "Maximum 191 Character"),
    password_confirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must be match"
    ),
});

function Register(props) {
    const [userGender, setGender] = useState("male");
    const [loading, setLoading] = useState(false);

    const [mailError, setMailError] = useState(null);
    const [nicknameError, setNicknameError] = useState(null);

    const handleOptionChange = (changeEvent) => {
        setGender(changeEvent.target.value);
    };

    /*//! Submit handler
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
                    if (response.data.code === 400) {
                        console.log(response.data.message.email[0]);
                        console.log(response.data.message.nickname[0]);
                        return;
                    }
                    setRegisterState({});
                    setLoading(false);
                    props.changer();
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setErrors((prevState) => ({
                ...prevState,
                passwordError: "Passwords must be matched",
            }));
            console.log(errors);
            setLoading(false);
        }
    };*/

    const setNicknameErr = () => {
        setNicknameError(null);
    };
    const setMailErr = () => {
        setMailError(null);
    };

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            name: "",
            nickname: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
        validationSchema,
        onSubmit: (values) => {
            setLoading(true);
            setMailError(null);
            setNicknameError(null);
            const data = {
                name: values.name,
                nickname: values.nickname,
                email: values.email,
                password: values.password,
                password_confirmation: values.password_confirmation,
                gender: userGender,
            };

            axios
                .post(`${BASE_URL}/api/v1/auth/register`, data, {
                    withCredentials: true,
                })
                .then((response) => {
                    if (response.data.code !== 400) {
                        setLoading(false);
                        props.changer();
                    } else {
                        if (response.data.message.email[0]) {
                            setMailError(response.data.message.email[0]);
                            setLoading(false);
                        }
                        if (response.data.message.nickname[0]) {
                            setNicknameError(response.data.message.nickname[0]);
                            setLoading(false);
                        }
                        return;
                    }
                })
                .catch(() =>
                    console.log(
                        "If you see this message, Please Contact with us"
                    )
                );
        },
    });

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
                    <h3>Register Now</h3>
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
                            <div className="form-group col-xs-12">
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
                                    value={values.name}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="text-danger">
                                    {errors.name ? errors.name : null}
                                </span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-xs-12">
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
                                    value={values.nickname}
                                    onChange={handleChange}
                                    onKeyUp={setNicknameErr}
                                    required
                                />
                                <span className="text-danger">
                                    {errors.nickname ? errors.nickname : null}
                                    {nicknameError ? <br /> : null}
                                    {nicknameError ? nicknameError : null}
                                </span>
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
                                    name="email"
                                    title="Enter Email"
                                    placeholder="Your Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onKeyUp={setMailErr}
                                    required
                                />
                                <span className="text-danger">
                                    {errors.email ? errors.email : null}
                                    {mailError ? <br /> : null}
                                    {mailError ? mailError : null}
                                </span>
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
                                    value={values.password}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="text-danger">
                                    {errors.password ? errors.password : null}
                                </span>
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
                                    value={values.password_confirmation}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="text-danger">
                                    {errors.password_confirmation
                                        ? errors.password_confirmation
                                        : null}
                                </span>
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
                            <a onClick={props.changer}>
                                Already have an account?
                            </a>
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
