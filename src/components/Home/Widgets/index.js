import React from "react";
import { Timeline, Follow } from "react-twitter-widgets";
import StackFlair from "./StackFlair";
import LinkedIn from "./LinkedIn";

class Widgets extends React.Component {
    render () {
        return (
            <div className="widgets">
                <Timeline
                    dataSource={{
                        "sourceType": "profile",
                        "screenName": "Ben_tiriel"
                    }}
                    options={{
                        "username": "Ben_tiriel",
                        "height": "400"
                    }}
                />
                <StackFlair stack={this.props.stack} />
                <Follow username="Ben_tiriel" options={{ "size": "large" }} />
                <LinkedIn />
            </div>
        );
    }
}

export default Widgets;
