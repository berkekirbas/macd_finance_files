import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";

const Landing = lazy(() => import("../../pages/Landing/Landing"));

const LandingGuestController = ({ ...restOfProps }) => {
    const authControlS2 = localStorage.getItem("auth_control_s2");
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                authControlS2 ? <Redirect to="/" /> : <Landing {...props} />
            }
        />
    );
};

export default LandingGuestController;
