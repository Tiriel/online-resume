import React from "react";
import MainMission from "../abstracts/MainMission";
import text from "./text.json";

class MainEquipe extends React.Component {
  render() {
    return (
      <MainMission title={text[this.props.locale].MainEquipe.title}>
        <dl>
          <dt>
            <strong>
              {text[this.props.locale].MainEquipe.dt1}
            </strong>
          </dt>
          <dd>
            <p>
              {text[this.props.locale].MainEquipe.dd1.map(val => <span>{val}<br /></span>)}
            </p>
            <em>{text[this.props.locale].MainEquipe.em}</em>
            <ul>
              <li>Actions on Google, Dialogflow, Firebase, Node.JS 6</li>
            </ul>
          </dd>
          <br />
          <dt>
            <strong>{text[this.props.locale].MainEquipe.dt2}</strong>
          </dt>
          <dd>
            <p>
              {text[this.props.locale].MainEquipe.dd2.map(val => <span>{val}<br /></span>)}
            </p>
          </dd>
        </dl>
      </MainMission>
    );
  }
}

export default MainEquipe;
