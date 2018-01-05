import React from "react";
import text from "./header.json";

class Header extends React.Component {
  render() {
    return (
      <header className="spacer">
        <p className="locale-selector">
          <span href="" id="fr" onClick={this.props.french()}>
            français
          </span>{" "}
          -&nbsp;
          <span href="" id="en" onClick={this.props.english()}>
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
