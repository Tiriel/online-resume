import React from "react";
import MainCompany from "../abstracts/MainCompany";
import MainMission from "../abstracts/MainMission";
import text from "./open.json";

class MainOpen extends React.Component {
    render () {
        return (
            <MainCompany
                title={text[this.props.locale].title}
                loc={text[this.props.locale].loc}
                date={text[this.props.locale].date}
                desc={text[this.props.locale].desc}
            >
                <MainMission title="Mentor">
                    <p>
                        {/*  eslint-disable-next-line max-len */}
                        {text[this.props.locale].p.map((val) => <span>{val}<br /></span>)}
                    </p>
                </MainMission>
            </MainCompany>
        );
    }
}

export default MainOpen;
