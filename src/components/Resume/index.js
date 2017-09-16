import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main";
import Github from "./Github";

class Resume extends React.Component {
  render() {
    return (
      <section className="container">
        <Nav />
        <Switch>
          <Route exact path="/resume" component={Main} />
          <Route path="/resume/github" component={Github} />
        </Switch>
      </section>
    );
  }
}

export default Resume;
