import React from "react";

class Repo extends React.Component {
  render() {
    let repo = this.props.repo;
    return (
      <article className="git-repo">
        <h2>
          <a href={repo.url}>{repo.name}</a>
        </h2>
        <p className="git-repo-desc">{repo.description}</p>
        <p>{this.props.lang}</p>
        {this.props.bar}
      </article>
    );
  }
}

export default Repo;
