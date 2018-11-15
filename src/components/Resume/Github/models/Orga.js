import React from "react";

class Orga extends React.Component {
    render () {
        const orga = this.props.orga;
        return (
            <article className="git-orga">
                <img alt={orga.name} src={orga.avatarUrl} />
                <div className="git-orga-infos">
                    <h2>
                        <a href={orga.url}>{orga.name}</a>
                    </h2>
                    <p>{orga.description}</p>
                </div>
            </article>
        );
    }
}

export default Orga;
