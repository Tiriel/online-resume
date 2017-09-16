import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileTitle from "./ProfileTitle";
import ProfileInfos from "./ProfileInfos";
import ProfileSpacer from "./ProfileSpacer";
import ProfileSkills from "./Skills";

class ProfileNav extends React.Component {
  render() {
    return (
      <ul className="profile-nav">
        <ProfilePic />
        <ProfileTitle />
        <ProfileInfos />
        <ProfileSpacer />
        <ProfileSpacer />
        <ProfileSkills />
        <div className="help">
          <span className="helper">Underlined</span> : Cliquable
        </div>
      </ul>
    );
  }
}

export default ProfileNav;
