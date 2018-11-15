import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileTitle from "./ProfileTitle";
import ProfileInfos from "./ProfileInfos";
import ProfileSpacer from "./ProfileSpacer";
import ProfileSkills from "./Skills";
import text from "./text.json";

class ProfileNav extends React.Component {
    render () {
        return (
            <ul className="profile-nav">
                <ProfilePic />
                <ProfileTitle />
                <ProfileInfos locale={this.props.locale}/>
                <ProfileSpacer />
                <ProfileSpacer />
                <ProfileSkills locale={this.props.locale}/>
                <div className="help">
                    {/*  eslint-disable-next-line max-len */}
                    <span className="helper">Underlined</span> : {text[this.props.locale].click}
                </div>
            </ul>
        );
    }
}

export default ProfileNav;
