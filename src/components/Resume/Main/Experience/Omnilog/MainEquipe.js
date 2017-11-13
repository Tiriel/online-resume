import React from "react";
import MainMission from "../abstracts/MainMission";

class MainEquipe extends React.Component {
  render() {
    return (
      <MainMission title="Mission : L'Equipe">
        <dl>
          <dt>
            <strong>
              Développement d'une application serverless d'upload video:
            </strong>
          </dt>
          <dd>
            <p>
              Développement d'une application Google Home<br />
              Gestion des entrées voix utilisateur<br />
              Gestion des fonctionnalités principales (flash info audio,<br />
              histoires du jour à la demande, jeu de questions-réponses)
            </p>
            <em>Stack technique : </em>
            <ul>
              <li>Actions on Google, Dialogflow, Firebase, Node.JS 6</li>
            </ul>
          </dd>
          <dt>
            <strong>Support applicatif :</strong>
          </dt>
          <dd>
            <p>
              Amélioration de l'outil d'upload interne<br />
              Préparation à l'export de statistiques vidéos<br />
            </p>
          </dd>
        </dl>
      </MainMission>
    );
  }
}

export default MainEquipe;
