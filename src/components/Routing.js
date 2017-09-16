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
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </section>
    );
  }
}
export default Routing;
