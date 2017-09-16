import React from "react";
import TechSkills from "./TechSkills";
import FrameworkSkills from "./FrameworkSkills";
import HumanSkills from "./HumanSkills";

class ProfileSkills extends React.Component {
  render() {
    return (
      <li className="skills">
        <h2>Compétences</h2>
        <TechSkills />
        <FrameworkSkills />
        <HumanSkills />
      </li>
    );
  }
}

export default ProfileSkills;
