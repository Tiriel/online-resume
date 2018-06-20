import React from "react";
import MainCompany from "../abstracts/MainCompany";
import MainParisien from "./MainParisien";
import MainEquipe from "./MainEquipe";
import text from "./text.json";

class MainOmnilog extends React.Component {
  render() {
    return (
      <MainCompany
        title={text[this.props.locale].MainOmnilog.title}
        loc={text[this.props.locale].MainOmnilog.loc}
        date={text[this.props.locale].MainOmnilog.date}
        desc={text[this.props.locale].MainOmnilog.desc}
      >
        <MainParisien locale={this.props.locale} />
        <MainEquipe locale={this.props.locale} />
      </MainCompany>
    );
  }
}

export default MainOmnilog;
