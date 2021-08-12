import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";

const Profile = lazy(() => import("../../pages/Profile/Profile"));

const ProfileProtectedRoute = ({ ...restOfProps }) => {
    const authControlS2 = localStorage.getItem("auth_control_s2");
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                authControlS2 ? (
                    <Profile {...props} />
                ) : (
                    <Redirect to="/landing" />
                )
            }
        />
    );
};

export default ProfileProtectedRoute;
