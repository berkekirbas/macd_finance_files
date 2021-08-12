//! Required Imports
import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

//! Components
import Spinner from "./components/loader/Loader";
import NotFound from "./components/NotFound/NotFound";

//! Protected Routes
import HomeProtectedRoute from "./utils/protected/HomeProtectedRoute";
import MeProtectedRoute from "./utils/protected/MeProtectedRoute";
import ProfileProtectedRoute from "./utils/protected/ProfileProtectedRoute";

// ! Guest Routes
import LandingGuestController from "./utils/guest/LandingGuestController";

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <HomeProtectedRoute exact path="/" />
                <MeProtectedRoute exact path="/me" />
                <ProfileProtectedRoute exact path="/profile/:nickname" />
                <LandingGuestController exact path="/landing" />
                <Route path="*" render={() => <NotFound />} />
            </Switch>
        </Suspense>
    );
}

export default App;
