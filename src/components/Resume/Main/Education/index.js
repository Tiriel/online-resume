import React from "react";
import TileBlock from "../TileBlock";
import text from "./index.json";

class MainEd extends React.Component {
  render() {
    return (
      <TileBlock>
        <h1>
          <i className="fa fa-graduation-cap fa-fw" /> Education
        </h1>
        <div>
          <dl>
            <dt>
              <strong>{text[this.props.locale].dt.st}</strong>{text[this.props.locale].dt.txt}
            </dt>
            <dd>
              <p>
                <em>{text[this.props.locale].dd.em}</em>
                <br />
                {text[this.props.locale].dd.p}
              </p>
            </dd>
          </dl>
        </div>
      </TileBlock>
    );
  }
}

export default MainEd;
