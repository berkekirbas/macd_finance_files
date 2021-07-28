import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";

const Register = lazy(() => import("../../pages/Register/Register"));

const RegisterGuestController = ({ ...restOfProps }) => {
    const authControlS2 = localStorage.getItem("auth_control_s2");
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                authControlS2 ? <Redirect to="/" /> : <Register {...props} />
            }
        />
    );
};

export default RegisterGuestController;
