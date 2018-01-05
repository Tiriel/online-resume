import React from "react";
import TileBlock from "../TileBlock";
import MainOmnilog from "./Omnilog/MainOmnilog";
import MainOpen from "./OpenClassrooms/MainOpen";
import text from "./index.json";

class MainExp extends React.Component {
  render() {
    return (
      <TileBlock>
        <h1>
          <i className="fa fa-briefcase fa-fw" /> {text[this.props.locale]}
        </h1>
        <MainOmnilog locale={this.props.locale}/>
        <MainOpen locale={this.props.locale}/>
      </TileBlock>
    );
  }
}

export default MainExp;
