import React from "react";

class StackFlair extends React.Component {
    render () {
        const {
                badge_counts,
                reputation,
                display_name,
                link,
                profile_image
            } = this.props.stack,
            medals = [];
        for (const medal in badge_counts) {
            const part = badge_counts[medal] !== 0 &&
        <span className={medal}>
            <i className="fa fa-circle fa-fw" aria-hidden="true" />{" "}
            {badge_counts[medal]}
        </span>
      ;
            medals.push(part);
        }
        return (
            <a href={link} className="stack">
                <div className="stack-flair">
                    <img alt="Stack Overflow avatar" src={profile_image} />
                    <span>
                        <i
                            className="fa fa-stack-overflow fa-fw"
                            aria-hidden="true" />{" "}{display_name}</span>
                    <div>
                        <span>{reputation}</span>
                        <span>{medals}</span>
                    </div>
                </div>
            </a>
        );
    }
}

export default StackFlair;
