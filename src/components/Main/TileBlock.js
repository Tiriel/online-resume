import React from "react";

class TileBlock extends React.Component {
  render() {
    return <article className="tile block">{this.props.children}</article>;
  }
}

export default TileBlock;
