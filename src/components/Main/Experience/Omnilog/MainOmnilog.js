import React from "react";
import MainCompany from "../abstracts/MainCompany";
import MainParisien from "./MainParisien";
import MainEquipe from "./MainEquipe";

class MainOmnilog extends React.Component {
  render() {
    return (
      <MainCompany
        title="Omnilog SA"
        loc="Neuilly, France"
        desc="Entreprise de Services Numériques. Diverses missions en régie clientèle."
      >
        <MainParisien />
        <MainEquipe />
      </MainCompany>
    );
  }
}

export default MainOmnilog;
