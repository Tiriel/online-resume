import React from "react";
import { StaticRouter as Router } from "react-router";
import Context from "react-context-component";

import render from "./render";
import App from "../components/App";

const ErrorPage = () => <h1>Oops, there was an error</h1>;

const reactApp = (req, res) => {
    const context = {};
    let HTML;
    let status = 200;

    const setStatus = (newStatus) => {
        status = newStatus;
    };

    try {
        HTML = render(
            <Context setStatus={setStatus}>
                <Router context={{}} location={req.url}>
                    <App/>
                </Router>
            </Context>
        )
    } catch (e) {
        HTML = render(ErrorPage);
        status = 500
    }

    if (context.url) {
        res.redirect(context.url, 301);
    } else {
        res.status(status).send(HTML);
    }
};

export default reactApp;
