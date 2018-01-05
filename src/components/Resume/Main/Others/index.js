import React from "react";
import TileBlock from "../TileBlock";
import text from "./index.json";

class MainOther extends React.Component {
  render() {
    return (
      <TileBlock>
        <h1>
          <i className="fa fa-book fa-fw" /> {text[this.props.locale].h1}
        </h1>
        <div>
          <ul>
            {text[this.props.locale].ul.map(val => <li>{val}</li>)}
          </ul>
        </div>
      </TileBlock>
    );
  }
}

export default MainOther;
