import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";

const Home = lazy(() => import("../../pages/Home/Home"));

const HomeProtectedRoute = ({ ...restOfProps }) => {
    const token = localStorage.getItem("auth_token");

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                token ? <Home {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default HomeProtectedRoute;