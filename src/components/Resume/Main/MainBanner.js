import React from "react";
import text from "./mainBanner.json"

class MainBanner extends React.Component {
  render() {
    return (
      <article className="tile banner">
        <h1>{text[this.props.locale].h1}</h1>
        <h2>{text[this.props.locale].h2}</h2>
      </article>
    );
  }
}

export default MainBanner;
