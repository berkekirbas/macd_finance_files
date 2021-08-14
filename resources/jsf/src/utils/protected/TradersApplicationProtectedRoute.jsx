import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";

const TradersApplication = lazy(() =>
    import("../../pages/TradersApplication/TradersApplication")
);

const TradersApplicationProtectedRoute = ({ ...restOfProps }) => {
    const authControlS2 = localStorage.getItem("auth_control_s2");
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                authControlS2 ? (
                    <TradersApplication {...props} />
                ) : (
                    <Redirect to="/landing" />
                )
            }
        />
    );
};

export default TradersApplicationProtectedRoute;
