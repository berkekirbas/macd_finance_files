import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import { ClipLoader } from "react-spinners";

import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import HomePageController from "./utils/HomePageController";

const Home = lazy(() => import("./pages/HomePage/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

const darkTheme = getMuiTheme(darkBaseTheme);

const defautTheme = getMuiTheme(lightBaseTheme);

import "./css/app.css";
import "./css/bootstrap-grid.css";
import "./css/animate.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: defautTheme,
        };

        window.theme = 0;
        window.toggleTheme = () => {
            if (window.theme === 0) {
                this.setState({ theme: darkTheme });
                document.body.style.backgroundColor = "darkgray";
                window.theme = 1;
            } else {
                this.setState({ theme: defautTheme });
                document.body.style.backgroundColor = "aliceblue";
                window.theme = 0;
            }
        };
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={this.state.theme}>
                <div className="content-wrapper">
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            <HomePageController exact path="/" />
                            <Route
                                exact
                                path="/login"
                                render={() => <Login />}
                            />
                            <Route
                                exact
                                path="/register"
                                render={() => <Register />}
                            />
                        </Switch>
                    </Suspense>
                </div>
            </MuiThemeProvider>
        );
    }
}

function Spinner() {
    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    return (
        <div style={style}>
            <ClipLoader color={"#123abc"} />
        </div>
    );
}

export default App;
