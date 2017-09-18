import React from "react";
import MainCompany from "../abstracts/MainCompany";
import MainMission from "../abstracts/MainMission";

class MainOpen extends React.Component {
  render() {
    return (
      <MainCompany
        title="OpenClassrooms"
        loc="Paris, France"
        desc="Organisme de formation en ligne."
      >
        <MainMission title="Mentor">
          <p>
            Encadrement et accompagnement d'élèves sur les projets de
            développement PHP, Symfony, et WordPress.<br />
            Parcours concernés : RNCP Développeur d'Applications PHP / Symfony,
            RNCP Chef de Projet Multimédia - Développement
          </p>
        </MainMission>
      </MainCompany>
    );
  }
}

export default MainOpen;
