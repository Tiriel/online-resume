import React from "react";
import MainBanner from "./MainBanner";
import MainExp from "./Experience";
import MainEd from "./Education";
import MainOther from "./Others";

class Main extends React.Component {
  render() {
    return (
      <section className="main container">
        <MainBanner />
        <MainExp />
        <MainEd />
        <MainOther />
      </section>
    );
  }
}

export default Main;
