import React from "react";
import Row from "./Row";

class HumanTable extends React.Component {
  render() {
    return (
      <table>
        <Row skill="Autonomie" score={5} />
        <Row skill="Travail d'équipe" score={4} />
        <Row skill="Organisation" score={3} />
        <Row skill="Agilité" score={4} />
        <Row skill="Relationnel" score={5} />
        <Row skill="Rigueur" score={5} />
      </table>
    );
  }
}

export default HumanTable;
