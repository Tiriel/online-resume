import React from "react";

class Gist extends React.Component {
    render () {
        const gist = this.props.gist;
        return (
            <article className="git-gist">
                <h3>
                    <a href={"https://gist.github.com/Tiriel/" + gist.name}>
                        {gist.name}
                    </a>
                </h3>
                <p>{gist.description}</p>
            </article>
        );
    }
}

export default Gist;
