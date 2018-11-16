import React from "react";

class GitProfile extends React.Component {
    render () {
        const github = this.props.github;
        let repos,
            contrib,
            gists,
            orgs = 0;
        if (undefined !== this.props.github.repositories) {
            repos = github.repositories.totalCount;
            contrib = github.repositoriesContributedTo.totalCount;
            gists = github.gists.totalCount;
            orgs = github.organizations.totalCount;
        }
        return (
            <section className="github git-profile">
                <article className="git-resume">
                    <img
                        className="git-avatar"
                        src={github.avatarUrl}
                        alt="avatar"
                    />
                    <div className="git-infos">
                        <h1>{github.name}</h1>
                        <p>{github.bio}</p>
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
