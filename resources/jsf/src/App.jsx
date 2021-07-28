//! Required Imports
import React, { Suspense } from "react";
import { Switch } from "react-router-dom";

//! Components
import Spinner from "./components/loader/Loader";

import HomeProtectedRoute from "./utils/protected/HomeProtectedRoute";
import LoginGuestController from "./utils/guest/LoginGuestController";
import RegisterGuestController from "./utils/guest/RegisterGuestController";

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <HomeProtectedRoute exact path="/" />
                <LoginGuestController exact path="/login" />
                <RegisterGuestController exact path="/register" />
            </Switch>
        </Suspense>
    );
}

export default App;
