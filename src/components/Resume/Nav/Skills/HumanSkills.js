import React from "react";
import HumanTable from "./Tables/HumanTable";

class HumanSkills extends React.Component {
  render() {
    return (
      <div className="react-wrapper">
        <h3>
          <i className="fa fa-cog fa-fw" />Qualités
        </h3>
        <HumanTable />
      </div>
    );
  }
}

export default HumanSkills;
