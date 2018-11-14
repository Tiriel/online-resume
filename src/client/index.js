import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../css/main.css";

import App from "../components/App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
