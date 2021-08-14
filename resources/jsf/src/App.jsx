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
import ExploreProtectedRoute from "./utils/protected/ExploreProtectedRoute";
import TradersApplicationProtectedRoute from "./utils/protected/TradersApplicationProtectedRoute";

// ! Guest Routes
import LandingGuestController from "./utils/guest/LandingGuestController";

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <HomeProtectedRoute exact path="/" />
                <ExploreProtectedRoute exact path="/explore" />
                <MeProtectedRoute exact path="/me" />
                <ProfileProtectedRoute exact path="/profile/:nickname" />
                <TradersApplicationProtectedRoute
                    exact
                    path="/traders_application"
                />
                <LandingGuestController exact path="/landing" />
                <Route path="*" render={() => <NotFound />} />
            </Switch>
        </Suspense>
    );
}

export default App;
