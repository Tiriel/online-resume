import React from "react";
import HumanTable from "./Tables/HumanTable";

class HumanSkills extends React.Component {
    render () {
        return (
            <div className="react-wrapper">
                <h3>
                    <i className="fa fa-cog fa-fw" />{this.props.text.title}
                </h3>
                <HumanTable text={this.props.text.table}/>
            </div>
        );
    }
}

export default HumanSkills;
