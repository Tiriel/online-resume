import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Routing from "./components/Routing";
import "./css/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeLocale = this.changeLocale.bind(this);
    this.state = { locale: 'fr' };
  }

  changeLocale(locale) {
    this.setState({locale: locale});
  }

  render() {
    return (
      <div className="body">
        <Helmet titleTemplate="%s - BenjaminZaslavsky.fr">
          <meta charSet="utf-8" />
          <title>Accueil</title>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/652258b75c.css"
          />
        </Helmet>
        <Header locale={this.state.locale} changeLocale={this.changeLocale}/>
        <Routing locale={this.state.locale}/>
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
