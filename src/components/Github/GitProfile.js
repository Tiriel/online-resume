import React from "react";

class GitProfile extends React.Component {
  render() {
    let data = this.props.data;
    let repos,
      contrib,
      gists,
      orgs = 0;
    if (void 0 !== this.props.data.repositories) {
      repos = data.repositories.totalCount;
      contrib = data.contributedRepositories.totalCount;
      gists = data.gists.totalCount;
      orgs = data.organizations.totalCount;
    }
    return (
      <section className="github git-profile">
        <article className="git-resume">
          <img className="git-avatar" src={data.avatarUrl} alt="avatar" />
          <div className="git-infos">
            <h1>{data.name}</h1>
            <p>{data.bio}</p>
          </div>
        </article>
        <article className="git-stats">
          <p>
            <a href="#repos">Repositories : </a>
            {repos}
          </p>
          <p>
            <span>Contributed repositories : </span>
            {contrib}
          </p>
          <p>
            <a href="#gists">Gists :</a>
            {gists}
          </p>
          <p>
            <a href="#orgas">Organizations :</a>
            {orgs}
          </p>
        </article>
      </section>
    );
  }
}

export default GitProfile;
