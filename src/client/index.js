import { render } from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../css/main.css";

import App from "../components/App";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
