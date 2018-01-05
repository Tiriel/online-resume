import React from "react";
import TechSkills from "./TechSkills";
import FrameworkSkills from "./FrameworkSkills";
import HumanSkills from "./HumanSkills";
import text from "./skills.json";

class ProfileSkills extends React.Component {
  render() {
    return (
      <li className="skills">
        <h2>{text[this.props.locale].skills}</h2>
        <TechSkills text={text[this.props.locale].tech} />
        <FrameworkSkills />
        <HumanSkills text={text[this.props.locale].hum} />
      </li>
    );
  }
}

export default ProfileSkills;
