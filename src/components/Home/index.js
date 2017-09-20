import React from "react";
import { getStackUser } from "../../utils/api";
import Widgets from "./Widgets";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stack: {} };
  }

  componentDidMount() {
    getStackUser().then(value => {
      this.setState({ stack: value.data.items[0] });
    });
  }

  render() {
    return (
      <section className="container home">
        <section className="home-title">
          <article className="presentation">
            <h1>Benjamin Zaslavsky</h1>
            <h2>Développeur PHP / Symfony, curieux de JS</h2>
            <h3>Autodidacte passionné, rigoureux, et touche-à-tout</h3>
          </article>
          <article className="article">
            <p>
              Ce site a pour but de présenter mes compétences et mon travail.
            </p>
            <p>
              Il a été réalisé sous ReactJS, l'intégration GitHub est faite via
              l'API GraphQL v4.
            </p>
            <p>
              Cliquez sur le menu en haut à gauche pour accéder à mon CV en
              ligne, mon résumé GitHub, et mon CV au format PDF.
            </p>
          </article>
        </section>
        <Widgets stack={this.state.stack} />
      </section>
    );
  }
}
export default Home;
