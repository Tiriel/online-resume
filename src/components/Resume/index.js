import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main";
import Github from "./Github";

class Resume extends React.Component {
    render () {
        return (
            <section className="container">
                <Nav locale={this.props.locale}/>
                <Switch>
                    <Route
                        exact path="/resume"
                        render={(props) => {
                            <Main {...props} locale={this.props.locale} />;
                        }}
                    />
                    <Route
                        path="/resume/github"
                        render={(props) => {
                            <Github {...props} locale={this.props.locale} />;
                        }}
                    />
                </Switch>
            </section>
        );
    }
}

export default Resume;
