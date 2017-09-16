import React from "react";
import FramTable from "./Tables/FramTable";

class FrameworkSkills extends React.Component {
  render() {
    return (
      <div className="react-wrapper">
        <h3>
          <i className="fa fa-cog fa-fw" />Frameworks
        </h3>
        <FramTable />
      </div>
    );
  }
}

export default FrameworkSkills;
