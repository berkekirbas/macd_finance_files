import React,{lazy} from "react";
import { Redirect, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/HomePage/Home"));


const HomePageController = ({ ...restOfProps }) => {
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

export default HomePageController;
