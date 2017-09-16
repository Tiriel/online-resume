import React from "react";
import { Helmet } from "react-helmet";
import { getUser } from "../../../utils/api";
import GitProfile from "./GitProfile";
import Gists from "./Gists";
import Repositories from "./Repositories";
import Organizations from "./Organizations";

class Github extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  componentWillMount() {
    getUser().then(value => {
      this.setState({ data: value.data.data });
    });
  }

  render() {
    let data = this.state.data;
    let ready = void 0 !== data.user;
    if (ready) {
      data = data.user;
    }
    return (
      <section className="main container">
        <Helmet>
          <title>Profil GitHub</title>
        </Helmet>
        <h1>GitHub Profile</h1>
        <GitProfile data={data} />
        <Repositories data={data} />
        <Gists data={data} />
        <Organizations data={data} />
      </section>
    );
  }
}

export default Github;
