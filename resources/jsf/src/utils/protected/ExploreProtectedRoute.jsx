import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";

const Explore = lazy(() => import("../../pages/Explore/Explore.jsx"));

const ExploreProtectedRoute = ({ ...restOfProps }) => {
    const authControlS2 = localStorage.getItem("auth_control_s2");
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                authControlS2 ? (
                    <Explore {...props} />
                ) : (
                    <Redirect to="/landing" />
                )
            }
        />
    );
};

export default ExploreProtectedRoute;
