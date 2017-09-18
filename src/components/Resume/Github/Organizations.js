import React from "react";
import Orga from "./models/Orga";

class Organizations extends React.Component {
  render() {
    let data = this.props.data;
    let orgas = [];
    if (void 0 !== data.organizations) {
      data = data.organizations.nodes;
      data.forEach(org => {
        orgas.push(<Orga key={org.id} orga={org} />);
      });
    }
    return (
      <section className="github" id="orgas">
        <h1>
          Organizations{" "}
          <a href="#">
            <i className="fa fa-angle-up fa-fw" />
          </a>
        </h1>
        <div className="git-orgas">{orgas}</div>
      </section>
    );
  }
}

export default Organizations;
