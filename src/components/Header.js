import React from "react";
import text from "./header.json";

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.french = this.french.bind(this);
        this.english = this.english.bind(this);
    }

    french () {
        this.props.changeLocale("fr");
    }

    english () {
        this.props.changeLocale("en");
    }

    render () {
        return (
            <header className="spacer">
                <p className="locale-selector">
                    <span href="" id="fr" onClick={this.french}>
                        français
                    </span>{" "}
                    -&nbsp;
                    <span href="" id="en" onClick={this.english}>
                        english
                    </span>
                </p>
                <div className="header">
                    <p>{text[this.props.locale].header}</p>
                </div>
            </header>
        );
    }
}

export default Header;
