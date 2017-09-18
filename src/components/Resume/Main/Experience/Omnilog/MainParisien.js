import React from "react";
import MainMission from "../abstracts/MainMission";

class MainParisien extends React.Component {
  render() {
    return (
      <MainMission title="Mission : Le Parisien">
        <dl>
          <dt>
            <strong>Développement d'une API RESTful dédiée à la vidéo :</strong>
          </dt>
          <dd>
            <p>
              Gestion des fiches d'informations des vidéos (CRUD)<br />
              Gestion des opérations CRUD sur les plateformes de diffusion
              partenaires (Dailymotion et Brightcove)<br />
              Upload de fichiers vidéos<br />
              Ré encodage asynchrone sur l'API et ingestion asynchrone des
              vidéos chez les plateformes de diffusion partenaires<br />
              Développement et conception effectués en solitaire
            </p>
            <em>Stack technique : </em>
            <ul>
              <li>Symfony 2.8, ElasticSearch, RabbitMQ, FFMpeg</li>
            </ul>
          </dd>
          <dt>
            <strong>Support applicatif :</strong>
          </dt>
          <dd>
            <p>
              Passage de l'API articles en HTTPS<br />
              Adaptation de l'API articles pour nouvelles applications mobiles<br
              />
              Changement de prestataire de paiement<br />
              Divers tickets de résolution de bugs/maintenance préventive<br />
            </p>
          </dd>
        </dl>
      </MainMission>
    );
  }
}
export default MainParisien;
