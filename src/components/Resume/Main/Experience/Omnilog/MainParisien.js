import React from "react";
import MainMission from "../abstracts/MainMission";
import text from "./text.json";

class MainParisien extends React.Component {
  render() {
    return (
      <MainMission title={text[this.props.locale].MainParisien.title}>
        <dl>
          <dt>
            <strong>{text[this.props.locale].MainParisien.dt1}</strong>
          </dt>
          <dd>
            <p>
              {text[this.props.locale].MainParisien.dd1.map(val => <span>{val}<br/></span>)}
            </p>
            <em>{text[this.props.locale].MainParisien.em}</em>
            <ul>
              <li>Symfony 2.8, ElasticSearch, RabbitMQ, FFMpeg</li>
            </ul>
          </dd>
          <br />
          <dt>
            <strong>{text[this.props.locale].MainParisien.dt2}</strong>
          </dt>
          <dd>
            <p>
              {text[this.props.locale].MainParisien.dd2.map(val => <span>{val}<br /></span>)}
            </p>
          </dd>
        </dl>
      </MainMission>
    );
  }
}
export default MainParisien;
