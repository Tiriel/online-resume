import React from "react";
import RepoContainer from "./models/RepoContainer";

class Repositories extends React.Component {
  render() {
    let data = this.props.data;
    let repos = [];
    if (void 0 !== data.pinnedRepositories) {
      data = data.pinnedRepositories.nodes;
      data.forEach(rep => {
        repos.push(<RepoContainer key={rep.id} repo={rep} />);
      });
    }
    return (
      <section className="github" id="repos">
        <h1>
          Pinned Repositories{" "}
          <a href="#">
            <i className="fa fa-angle-up fa-fw" />
          </a>
        </h1>
        <div className="git-repos">{repos}</div>
      </section>
    );
  }
}

export default Repositories;
