//! Required Imports
import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

//! Components
import Spinner from "./components/loader/Loader";

//! Pages
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/login" render={() => <Login />} />
                <Route exact path="/register" render={() => <Register />} />
            </Switch>
        </Suspense>
    );
}

export default App;
