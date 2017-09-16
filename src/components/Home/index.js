import React from "react";

class Home extends React.Component {
  render() {
    return (
      <section className="container home">
        <article className="presentation">
          <h1>Benjamin Zaslavsky</h1>
          <h2>Développeur PHP / Symfony, curieux de JS</h2>
          <h3>Autodidacte passionné, rigoureux, et touche-à-tout</h3>
        </article>
        <article className="article">
          <p>Ce site a pour but de présenter mes compétences et mon travail.</p>
          <p>
            Il a été réalisé sous ReactJS, l'intégration GitHub est faite via
            l'API GraphQL v4.
          </p>
        </article>
      </section>
    );
  }
}
export default Home;
