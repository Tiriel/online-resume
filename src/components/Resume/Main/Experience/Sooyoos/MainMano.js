import React from "react";
import MainMission from "../abstracts/MainMission";
import text from "./text.json";

class MainMano extends React.Component {
  render() {
    return (
      <MainMission title={text[this.props.locale].MainMano.title}>
        <dl>
          <dt>
            <strong>
              {text[this.props.locale].MainMano.dt1}
            </strong>
          </dt>
          <dd>
            <p>
              {text[this.props.locale].MainMano.dd1.map((val) => <span>{val}<br /></span>)}
            </p>
            <em>{text[this.props.locale].MainMano.em}</em>
            <ul>
              <li>Symfony 3.4, MySQL, ElasticSearch</li>
            </ul>
          </dd>
        </dl>
      </MainMission>
    );
  }
}

export default MainMano;
