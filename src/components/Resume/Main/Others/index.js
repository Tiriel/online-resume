import React from "react";
import TileBlock from "../TileBlock";

class MainOther extends React.Component {
  render() {
    return (
      <TileBlock>
        <h1>
          <i className="fa fa-fa-book fa-fw" /> Autres
        </h1>
        <div>
          <ul>
            <li>Jeune papa</li>
            <li>Passionné de lecture et de découvertes</li>
            <li>Violoncelliste amateur</li>
            <li>Runner & CrossFitter débutant</li>
            <li>Possède une raquette de tennis de table</li>
          </ul>
        </div>
      </TileBlock>
    );
  }
}

export default MainOther;
