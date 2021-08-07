//! Required Imports
import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

//! Components
import Spinner from "./components/loader/Loader";

import HomeProtectedRoute from "./utils/protected/HomeProtectedRoute";
import LandingGuestController from "./utils/guest/LandingGuestController";

import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <HomeProtectedRoute exact path="/" />
                <LandingGuestController exact path="/landing" />
                <Route path="*" render={() => <NotFound />} />
            </Switch>
        </Suspense>
    );
}

export default App;
