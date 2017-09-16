import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Github from "./Github";

class Routing extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/github" component={Github} />
      </Switch>
    );
  }
}
export default Routing;
