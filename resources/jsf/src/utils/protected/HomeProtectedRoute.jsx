import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";

const Home = lazy(() => import("../../pages/Home/Home"));

const HomeProtectedRoute = ({ ...restOfProps }) => {
    const authControlS2 = localStorage.getItem("auth_control_s2");
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                authControlS2 ? <Home {...props} /> : <Redirect to="/landing" />
            }
        />
    );
};

export default HomeProtectedRoute;
