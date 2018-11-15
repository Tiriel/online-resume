import React from "react";
import { Helmet } from "react-helmet";
import { getGithubUser } from "../../../utils/api";
import GitProfile from "./GitProfile";
import Gists from "./Gists";
import Repositories from "./Repositories";
import Organizations from "./Organizations";

class Github extends React.Component {
    constructor (props) {
        super(props);
        this.state = { "github": {}};
    }

    componentWillMount () {
        getGithubUser().then((value) => {
            this.setState({ "github": value.data.data });
        });
    }

    render () {
        let github = this.state.github;
        const ready = undefined !== github.user;
        if (ready) {
            github = github.user;
        }
        return (
            <section className="main container">
                <Helmet>
                    <title>Profil GitHub</title>
                </Helmet>
                <h1>GitHub Profile</h1>
                <GitProfile github={github} />
                <Repositories data={github} />
                <Gists data={github} />
                <Organizations data={github} />
            </section>
        );
    }
}

export default Github;
