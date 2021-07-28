import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";

const Login = lazy(() => import("../../pages/Login/Login"));

const LoginGuestController = ({ ...restOfProps }) => {
    const authControlS2 = localStorage.getItem("auth_control_s2");
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                authControlS2 ? <Redirect to="/" /> : <Login {...props} />
            }
        />
    );
};

export default LoginGuestController;
