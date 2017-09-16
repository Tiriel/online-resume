import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Routing from "./components/Routing";
import "./css/main.css";

const App = () => (
  <div className="body">
    <Helmet titleTemplate="%s - BenjaminZaslavsky.fr">
      <meta charSet="utf-8" />
      <title>Accueil</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/652258b75c.css"
      />
    </Helmet>
    <Header />
    <Routing />
  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
