import express from "express";
import path from "path";
import proxy from "http-proxy-middleware";

import reactApp from "./app";

const host = process.env.REACT_APP_HOST || "localhost",
    serverPort =
        process.env.NODE_ENV === "development"
            ? process.env.REACT_APP_SERVER_PORT
            : process.env.REACT_APP_PORT || 80,
    app = express();

if (process.env.NODE_ENV === "production") {
    app.use(
        "/static",
        express.static(path.join(process.cwd(), "build/client/static"))
    );
} else {
    app.use(
        ["/static", "/sockjs-node"],
        proxy({
            target: `http://localhost:${process.env.REACT_APP_CLIENT_PORT}`,
            ws: true,
            "logLevel": "error"
        })
    );
}

app.use("/", express.static("build/client"));
app.use(reactApp);

app.listen(serverPort);
console.log(`Listenning at http://${host}:${serverPort}`);
