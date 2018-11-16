import React from "react";
import PropTypes from "prop-types";

class MainMission extends React.Component {
    render () {
        return (
            <article className="mission">
                <h3>
                    <i className="fa fa-circle-o fa-fw" />
                    {this.props.title}
                </h3>
                {this.props.children}
            </article>
        );
    }
}

MainMission.propTypes = {
    title: PropTypes.string.isRequired
};

export default MainMission;
