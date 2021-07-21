import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { Provider } from "mobx-react";
import Store from "./Store";

ReactDOM.render(
    <BrowserRouter>
        <Provider Store={Store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
