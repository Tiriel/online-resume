import React from "react";
import TechTable from "./Tables/TechTable";

class TechSkills extends React.Component {
    render () {
        return (
            <div className="react-wrapper">
                <h3>
                    <i className="fa fa-cog fa-fw" />
                    {this.props.text.title}
                </h3>
                <TechTable />
            </div>
        );
    }
}

export default TechSkills;
