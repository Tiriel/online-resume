import React from "react";
import TileBlock from "../TileBlock";
import MainOmnilog from "./Omnilog/MainOmnilog";
import MainOpen from "./OpenClassrooms/MainOpen";

class MainExp extends React.Component {
  render() {
    return (
      <TileBlock>
        <h1>
          <i className="fa fa-briefcase fa-fw" /> Expériences
        </h1>
        <MainOmnilog />
        <MainOpen />
      </TileBlock>
    );
  }
}

export default MainExp;
