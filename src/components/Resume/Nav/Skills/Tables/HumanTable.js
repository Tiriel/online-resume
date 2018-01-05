import React from "react";
import Row from "./Row";

class HumanTable extends React.Component {
  render() {
    const text = this.props.text;

    return (
      <table>
        <tbody>
          <Row skill={text.auto} score={5} />
          <Row skill={text.team} score={4} />
          <Row skill={text.org} score={3} />
          <Row skill={text.agi} score={4} />
          <Row skill={text.rel} score={5} />
          <Row skill={text.ps} score={5} />
        </tbody>
      </table>
    );
  }
}

export default HumanTable;
