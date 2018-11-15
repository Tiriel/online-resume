import React from "react";

class ProfilePic extends React.Component {
    render () {
        return (
            <li>
                <div>
                    <img
                        src={require("../../../assets/decoded.jpeg")}
                        className="thumbnail"
                        alt=""
                    />
                </div>
            </li>
        );
    }
}

export default ProfilePic;
