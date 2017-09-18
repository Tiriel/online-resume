import React from "react";
import Gist from "./models/Gist";

class Gists extends React.Component {
  render() {
    let data = this.props.data;
    let gists = [];
    if (void 0 !== data.gists) {
      data = data.gists.nodes;
      data.forEach(git => {
        gists.push(<Gist key={git.id} gist={git} />);
      });
    }
    return (
      <section className="github" id="gists">
        <h1>
          Latest public Gists{" "}
          <a href="#">
            <i className="fa fa-angle-up fa-fw" />
          </a>
        </h1>
        <div className="git-gists">{gists}</div>
      </section>
    );
  }
}

export default Gists;
