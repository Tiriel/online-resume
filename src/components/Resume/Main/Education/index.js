import React from "react";
import TileBlock from "../TileBlock";

class MainEd extends React.Component {
  render() {
    return (
      <TileBlock>
        <h1>
          <i className="fa fa-graduation-cap fa-fw" /> Education
        </h1>
        <div>
          <dl>
            <dt>
              <strong>Juin 2017 - En cours : </strong>Validation des Acquis de
              l'Expérience
            </dt>
            <dd>
              <p>
                <em>RNCP - Développeur d'Applications PHP / Symfony</em>
                <br />
                Téléformation : OpenClassrooms
              </p>
            </dd>
          </dl>
        </div>
      </TileBlock>
    );
  }
}

export default MainEd;
