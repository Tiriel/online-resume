import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeButton from "./HomeButton";
import Home from "./Home";
import Resume from "./Resume";

class Routing extends React.Component {
  render() {
    return (
      <section className="container">
        <HomeButton />
        <Switch>
          <Route
            exact path="/"
            render={props => <Home {...props} locale={this.props.locale} />}
          />
          <Route
            path="/resume"
            render={props => <Resume {...props} locale={this.props.locale} />}
          />
        </Switch>
      </section>
    );
  }
}
export default Routing;
