import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";

const Me = lazy(() => import("../../pages/Me/Me"));

const MeProtectedRoute = ({ ...restOfProps }) => {
    const authControlS2 = localStorage.getItem("auth_control_s2");
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                authControlS2 ? <Me {...props} /> : <Redirect to="/landing" />
            }
        />
    );
};

export default MeProtectedRoute;
